import { HOME } from 'actionsType';

const initialState = {
  error: {},
  popupList: []
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case HOME.GET_POP_UP.SUCCESS: {
      return {
        ...state,
        error: {},
        popupList: action.payload
      };
    }

    case HOME.GET_POP_UP.FAILURE: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default home;
