import { TRANSACTIONS } from 'actionsType';
import moment from 'moment';

const initialState = {
  claimHistory: [],
  redeemHistory: [],
  orderHistory: [],
  totalOrder: 0,
  totalClaim: 0,
  totalRedeem: 0
};

//Only God knows this code
const groupBy = items => {
  let group = items.reduce((acc, cur) => {
    acc[moment(cur.transaction.businessTime).format('DD/MM/YYYY')] = [
      ...(acc[moment(cur.transaction.businessTime).format('DD/MM/YYYY')] || []),
      cur
    ];
    return acc;
  }, []);

  let result = Object.keys(group).map(key => {
    return { key: key, data: group[key] };
  });
  return result;
};

const groupLoadMore = array => {
  return array.reduce((acc, cur) => {
    let index = acc.findIndex(el => el.key === cur.key);
    if (index !== -1) {
      acc[index].data = acc[index].data.concat(cur.data);
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get claim history actions =====
     */
    case TRANSACTIONS.GET_CLAIM_HISTORY.SUCCESS: {
      const { totalCount, items, isLoadMore } = action.payload;
      let newList = [];
      let group = groupBy(items);

      if (isLoadMore) {
        let newArr = state.claimHistory.concat(group);
        newList = groupLoadMore(newArr);
      } else {
        newList = group;
      }

      return {
        ...state,
        claimHistory: newList,
        totalClaim: totalCount
      };
    }
    case TRANSACTIONS.GET_CLAIM_HISTORY.FAILURE: {
      return {
        ...state
      };
    }

    /**
     * ===== Get claim history actions =====
     */
    case TRANSACTIONS.GET_REDEEM_HISTORY.SUCCESS: {
      const { totalCount, items, isLoadMore } = action.payload;
      let newList = [];
      let group = groupBy(items);

      if (isLoadMore) {
        let newArr = state.redeemHistory.concat(group);
        newList = groupLoadMore(newArr);
      } else {
        newList = group;
      }

      return {
        ...state,
        redeemHistory: newList,
        totalRedeem: totalCount
      };
    }
    case TRANSACTIONS.GET_REDEEM_HISTORY.FAILURE: {
      return {
        ...state
      };
    }

    /**
     * ===== Get order history actions =====
     */
    case TRANSACTIONS.GET_ORDER_HISTORY.SUCCESS: {
      const { totalCount, items, isLoadMore } = action.payload;
      let newList = [];
      let group = groupBy(items);

      if (isLoadMore) {
        let newArr = state.orderHistory.concat(group);
        newList = groupLoadMore(newArr);
      } else {
        newList = group;
      }

      return {
        ...state,
        orderHistory: newList,
        totalOrder: totalCount
      };
    }
    case TRANSACTIONS.GET_ORDER_HISTORY.FAILURE: {
      return {
        ...state
      };
    }

    case TRANSACTIONS.CLEAR_TRANSACTIONS.CLEAR: {
      return {
        ...state,
        claimHistory: [],
        redeemHistory: [],
        orderHistory: [],
        totalOrder: 0,
        totalClaim: 0,
        totalRedeem: 0
      };
    }

    default:
      return state;
  }
};

export default transactions;
