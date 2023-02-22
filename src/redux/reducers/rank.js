import { RANK } from 'actionsType';

const initialState = {
  rankList: []
};

const rank = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get all article actions =====
     */

    case RANK.GET_ALL_RANKS.HANDLER: {
      return {
        ...state
      };
    }

    case RANK.GET_ALL_RANKS.SUCCESS: {
      return {
        ...state,
        rankList: action.payload.items
      };
    }
    case RANK.GET_ALL_RANKS.FAILURE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default rank;
