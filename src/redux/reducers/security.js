import { SECURITY } from 'actionsType';
import I18n from 'src/i18n';

const initialState = {
  message: '',
  isError: false,
  confirmCurrentFail: 0,
  forgetList: []
};

const security = (state = initialState, action) => {
  switch (action.type) {
    case SECURITY.GET_OTP_FORGET.SUCCESS: {
      const { resend, phoneNumber } = action.payload;
      let newList = state.forgetList.slice();
      if (resend) {
        const time = new Date();
        const millisecond = time.getTime();
        const idx = newList.findIndex(el => el.phoneNumber === phoneNumber);

        if (idx === -1) {
          const userOBJ = Object.assign({
            phoneNumber: phoneNumber,
            timeResend: [millisecond],
            timeForget: []
          });
          newList = [...state.forgetList, userOBJ];
        } else {
          newList = newList.map(el => {
            if (el.phoneNumber === phoneNumber) {
              let newArr = el.timeResend.slice();
              if (newArr.length < 3) {
                newArr.push(millisecond);
              } else {
                newArr.splice(0, 3, millisecond);
              }

              return {
                ...el,
                timeResend: newArr
              };
            } else {
              return el;
            }
          });
        }
      }
      return {
        ...state,
        forgetList: newList
      };
    }

    case SECURITY.GET_OTP_FORGET.FAILURE: {
      return {
        ...state,
        isError: true,
        message: action.payload.message
      };
    }

    case SECURITY.CONFIRM_OTP_FORGET.SUCCESS: {
      const { payload } = action;
      let newListForget = state.forgetList.slice();
      const forgetIdx = newListForget.findIndex(el => el.phoneNumber === payload.phoneNumber);
      if (forgetIdx !== -1) {
        const userOBJ = Object.assign({
          phoneNumber: payload.phoneNumber,
          timeForget: [],
          timeResend: []
        });
        newListForget[forgetIdx] = userOBJ;
      }
      return {
        ...state,
        message: '',
        isError: false,
        forgetList: newListForget,
        confirmCurrentFail: 0
      };
    }

    case SECURITY.CONFIRM_OTP_FORGET.FAILURE: {
      const { phoneNumber, message } = action.payload;
      let newList = state.forgetList.slice();
      if (phoneNumber) {
        const time = new Date();
        const millisecond = time.getTime();
        const idx = newList.findIndex(el => el.phoneNumber === phoneNumber);

        if (idx === -1) {
          const userOBJ = Object.assign({
            phoneNumber: phoneNumber,
            timeForget: [millisecond],
            timeResend: []
          });
          newList = [...state.forgetList, userOBJ];
        } else {
          newList = newList.map(el => {
            if (el.phoneNumber === phoneNumber) {
              let newArr = el.timeForget.slice();
              if (newArr.length < 3) {
                newArr.push(millisecond);
              } else {
                newArr.splice(0, 3, millisecond);
              }

              return {
                ...el,
                timeForget: newArr
              };
            } else {
              return el;
            }
          });
        }
      }

      return {
        ...state,
        message: message,
        isError: true,
        forgetList: newList
      };
    }

    case SECURITY.CLEAR_ERROR.CLEAR: {
      return {
        ...state,
        isError: false,
        message: ''
      };
    }

    case SECURITY.CONFIRM_CURRENT_PIN_CODE.FAILURE: {
      let msg = '';
      let count = state.confirmCurrentFail + 1;
      if (count >= 3) {
        msg = I18n.t('errMessage.incorrect_three_times');
      } else {
        msg = I18n.t('errMessage.pin_not_correct');
      }
      return {
        ...state,
        message: msg,
        isError: true,
        confirmCurrentFail: count
      };
    }

    case SECURITY.CONFIRM_CURRENT_PIN_CODE.CLEAR: {
      return {
        ...state,
        message: '',
        isError: false,
        confirmCurrentFail: 0
      };
    }

    default:
      return state;
  }
};

export default security;
