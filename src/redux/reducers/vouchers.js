import { VOUCHER } from 'actionsType';

const initialState = {
  vouchers: [],
  voucherDetail: {},
  redeemVoucher: {},
  totalCount: 0,
  redeemedVouchers: [],
  totalRedeemedVouchers: 0,
  errorRedeemVoucher: {},
  isRedeemVoucherError: false,
  inactiveVouchers: [],
  totalInactiveVouchers: 0,
  voucherGroup: [],
  isUseSuccessful: false,
  usedVoucher: {},
  mostSearching: [],
  brands: [],
  searchResult: [],
  searchTotal: 0,
  searchHistory: [],
  redeemedVoucherDetail: {},
  errorDetail: '',
  voucherTypes: [],
  wishlist: [],
  errorWishlist: '',
  voucherHome: [],
  isLoadingGetVouchers: false
};

const vouchers = (state = initialState, action) => {
  let { payload } = action;

  switch (action.type) {
    case VOUCHER.GET_LIST_VOUCHERS_BY_SORTING.HANDLER: {
      return {
        ...state,
        isLoadingGetVouchers: true
      };
    }

    case VOUCHER.GET_LIST_VOUCHERS_BY_SORTING.SUCCESS: {
      const { giftGroupTypeFilter, totalCount, items, isLoadMore } = payload;
      let listVoucherObject = [];
      let voucherObject = Object.assign({
        giftGroupTypeFilter: giftGroupTypeFilter,
        totalCount: totalCount,
        item: items
      });
      if (!state.vouchers.some(el => el.giftGroupTypeFilter == giftGroupTypeFilter)) {
        listVoucherObject = [...state.vouchers, voucherObject];
      } else {
        listVoucherObject = state.vouchers.map(el => {
          if (el.giftGroupTypeFilter == giftGroupTypeFilter) {
            if (!isLoadMore) {
              return { ...el, totalCount: totalCount, item: items };
            }
            return { ...el, totalCount: totalCount, item: el.item.concat(items) };
          }
          return el;
        });
      }

      return {
        ...state,
        vouchers: listVoucherObject,
        totalCount: payload.totalCount,
        voucherHome: payload.items,
        isLoadingGetVouchers: false
      };
    }

    case VOUCHER.GET_LIST_VOUCHERS_BY_SORTING.FAILURE: {
      return {
        ...state,
        isLoadingGetVouchers: false
      };
    }

    case VOUCHER.REDEEM_VOUCHER.HANDLER: {
      return {
        ...state
      };
    }

    case VOUCHER.REDEEM_VOUCHER.SUCCESS: {
      return {
        ...state,
        redeemVoucher: payload.result,
        errorRedeemVoucher: {},
        isRedeemVoucherError: false
      };
    }

    case VOUCHER.REDEEM_VOUCHER.FAILURE: {
      return {
        ...state,
        errorRedeemVoucher: payload,
        isRedeemVoucherError: true
      };
    }

    case VOUCHER.REDEEM_VOUCHER.CLEAR: {
      return {
        ...state,
        errorRedeemVoucher: {},
        isRedeemVoucherError: false
      };
    }

    case VOUCHER.GET_LIST_REDEEMED_VOUCHER.HANDLER: {
      return {
        ...state
      };
    }

    case VOUCHER.GET_LIST_REDEEMED_VOUCHER.SUCCESS: {
      return {
        ...state,
        redeemedVouchers: payload.items,
        totalRedeemedVouchers: payload.totalCount
      };
    }

    case VOUCHER.GET_LIST_REDEEMED_VOUCHER.FAILURE: {
      return {
        ...state
      };
    }
    case VOUCHER.GET_LIST_VOUCHERS_GROUP.SUCCESS: {
      return {
        ...state,
        voucherGroup: payload.items
      };
    }

    case VOUCHER.RESET_ERROR.HANDLER: {
      return {
        ...state,
        errorRedeemVoucher: {},
        isRedeemVoucherError: false
      };
    }

    case VOUCHER.GET_LIST_INACTIVE_VOUCHER.HANDLER: {
      return {
        ...state
      };
    }

    case VOUCHER.GET_LIST_INACTIVE_VOUCHER.SUCCESS: {
      return {
        ...state,
        inactiveVouchers: payload.items,
        totalInactiveVouchers: payload.totalCount
      };
    }

    case VOUCHER.GET_LIST_INACTIVE_VOUCHER.FAILURE: {
      return {
        ...state
      };
    }

    case VOUCHER.USE_VOUCHER.HANDLER: {
      return {
        ...state,
        isUseSuccessful: false
      };
    }

    case VOUCHER.USE_VOUCHER.SUCCESS: {
      return {
        ...state,
        isUseSuccessful: true,
        usedVoucher: payload.item
      };
    }

    case VOUCHER.USE_VOUCHER.FAILURE: {
      return {
        ...state,
        isUseSuccessful: false
      };
    }

    case VOUCHER.GET_DATA_BY_SUGGEST.HANDLER: {
      return {
        ...state
      };
    }

    case VOUCHER.GET_DATA_BY_SUGGEST.SUCCESS: {
      return {
        ...state,
        mostSearching: action.payload.mostSearchCharacter,
        brands: action.payload.brandName
      };
    }

    case VOUCHER.GET_DATA_BY_SUGGEST.FAILURE: {
      return {
        ...state
      };
    }

    // searching actions

    case VOUCHER.SEARCH_VOUCHERS.HANDLER: {
      return {
        ...state
      };
    }

    case VOUCHER.SEARCH_VOUCHERS.SUCCESS: {
      return {
        ...state,
        searchResult: action.payload.isLoadMore
          ? [...state.searchResult, ...action.payload.items]
          : action.payload.items,
        searchTotal: action.payload.totalCount
      };
    }

    case VOUCHER.SEARCH_VOUCHERS.FAILURE: {
      return {
        ...state
      };
    }

    case VOUCHER.SEARCH_VOUCHERS.CLEAR: {
      return {
        ...state,
        searchResult: [],
        searchTotal: 0
      };
    }

    case VOUCHER.SEARCH_VOUCHERS.STORE: {
      let newArr = [action.payload, ...state.searchHistory];
      if (newArr.length >= 9) newArr.pop();
      let filterArr = newArr.filter((v, i) => newArr.indexOf(v) === i);

      return {
        ...state,
        searchHistory: filterArr
      };
    }

    case VOUCHER.SEARCH_VOUCHERS.REMOVE: {
      return {
        ...state,
        searchHistory: []
      };
    }

    case VOUCHER.GET_VOUCHER_DETAIL.HANDLER: {
      return {
        ...state,
        voucherDetail: {},
        errorDetail: ''
      };
    }

    case VOUCHER.GET_VOUCHER_DETAIL.SUCCESS: {
      return {
        ...state,
        voucherDetail: action.payload
      };
    }

    case VOUCHER.GET_VOUCHER_DETAIL.FAILURE: {
      return {
        ...state,
        errorDetail: action.payload
      };
    }

    case VOUCHER.GET_REDEEMED_VOUCHER_DETAIL.HANDLER: {
      return {
        ...state,
        redeemedVoucherDetail: {}
      };
    }

    case VOUCHER.GET_REDEEMED_VOUCHER_DETAIL.SUCCESS: {
      return {
        ...state,
        redeemedVoucherDetail: action.payload.item
      };
    }

    case VOUCHER.GET_REDEEMED_VOUCHER_DETAIL.FAILURE: {
      return {
        ...state,
        redeemedVoucherDetail: {}
      };
    }
    case VOUCHER.UPDATE_WISHLIST.HANDLER: {
      return {
        ...state
      };
    }

    case VOUCHER.UPDATE_WISHLIST.SUCCESS: {
      let newArr = [...state.vouchers];
      let newArrGroup = [...state.voucherGroup];
      newArr.forEach(element => {
        element?.item.forEach(elm => {
          if (action.payload.giftId == elm.giftInfor.id) {
            if (action.payload.actions === 'A') {
              elm.giftInfor.isInWishlist = true;
            } else {
              elm.giftInfor.isInWishlist = false;
            }
          }
        });
      });
      newArrGroup.forEach(element => {
        if (action.payload.giftId == element.giftInfor.id) {
          if (action.payload.actions === 'A') {
            element.giftInfor.isInWishlist = true;
          } else {
            element.giftInfor.isInWishlist = false;
          }
        }
      });
      return {
        ...state,
        vouchers: [...newArr],
        voucherGroup: [...newArrGroup]
      };
    }

    case VOUCHER.UPDATE_WISHLIST.FAILURE: {
      return {
        ...state,
        errorWishlist: action.payload.message
      };
    }

    case VOUCHER.GET_VOUCHER_TYPE.SUCCESS: {
      return {
        ...state,
        voucherTypes: action.payload.items
      };
    }

    case VOUCHER.GET_VOUCHER_TYPE.FAILURE: {
      return {
        ...state
      };
    }

    case VOUCHER.GET_WISHLIST_BY_MEMBER.HANDLER: {
      return {
        ...state
      };
    }
    case VOUCHER.GET_WISHLIST_BY_MEMBER.SUCCESS: {
      return {
        ...state,
        wishlist: action.payload
      };
    }
    case VOUCHER.GET_WISHLIST_BY_MEMBER.FAILURE: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default vouchers;
