import { STORE } from 'actionsType';

const initialState = {
  stores: [],
  totalCount: 0,
  brand: [],
  city: []
};

const store = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get all store actions =====
     */
    case STORE.GET_ALL_STORE.HANDLER: {
      return {
        ...state
      };
    }
    case STORE.GET_ALL_STORE.SUCCESS: {
      return {
        ...state,
        stores: action.payload.items,
        totalCount: action.payload.totalCount
      };
    }
    case STORE.GET_ALL_STORE.FAILURE: {
      return {
        ...state
      };
    }
    case STORE.GET_STORE_FILTER.HANDLER: {
      return {
        ...state
      };
    }
    case STORE.GET_STORE_FILTER.SUCCESS: {
      return {
        ...state,
        brand: action.payload.brand,
        city: action.payload.city
      };
    }
    case STORE.GET_STORE_FILTER.FAILURE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default store;
