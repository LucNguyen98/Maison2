import { SYSTEM } from 'actionsType';

const initialState = {
  error: {},
  isError: false,
  connectionStatus: false,
  isNeedUpdate: null
};

const system = (state = initialState, action) => {
  switch (action.type) {
    case SYSTEM.SHOW_ERROR.STORE: {
      return {
        ...state,
        error: action.payload,
        isError: true
      };
    }
    case SYSTEM.CLEAR_ERROR.CLEAR: {
      return {
        ...state,
        error: {},
        isError: false
      };
    }

    case SYSTEM.UPDATE_CONNECTION_STATUS.STORE: {
      return {
        ...state,
        connectionStatus: action.payload
      };
    }

    case SYSTEM.SET_NEED_UPDATE_VERSION: {
      return {
        ...state,
        isNeedUpdate: action.payload
      };
    }
    default:
      return state;
  }
};

export default system;
