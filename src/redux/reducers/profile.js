import { PROFILE } from 'actionsType';
import I18n from 'src/i18n';

const initialState = {
  changePhoneList: [],
  isLoading: true,
  isError: false,
  isExisted: false,
  isSuccess: false,
  message: '',
  profile: {}
};

const profile = (state = initialState, action) => {
  let { payload } = action;

  switch (action.type) {
    case PROFILE.GET_PROFILE.HANDLER: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case PROFILE.GET_PROFILE.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        profile: payload
      };
    }

    case PROFILE.GET_PROFILE.FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    case PROFILE.UPDATE_PROFILE.HANDLER: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      };
    }

    case PROFILE.UPDATE_PROFILE.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        profile: payload
      };
    }

    case PROFILE.UPDATE_PROFILE.FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      };
    }
    case PROFILE.GET_OTP_PROFILE.HANDLER: {
      return {
        ...state
      };
    }

    case PROFILE.GET_OTP_PROFILE.SUCCESS: {
      const { resend, phoneNumber } = action.payload;
      let newList = state.changePhoneList.slice();
      if (resend) {
        const time = new Date();
        const millisecond = time.getTime();
        const idx = newList.findIndex(el => el.phoneNumber === phoneNumber);

        if (idx === -1) {
          const userOBJ = Object.assign({
            phoneNumber: phoneNumber,
            timeResend: [millisecond],
            timeOTP: []
          });
          newList = [...state.changePhoneList, userOBJ];
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
        changePhoneList: newList
      };
    }

    case PROFILE.GET_OTP_PROFILE.FAILURE: {
      return {
        ...state,
        isError: true,
        message: action.payload.message
      };
    }

    case PROFILE.CONFIRM_CODE_PROFILE.SUCCESS: {
      const { payload } = action;
      let newList = state.changePhoneList.slice();
      const idx = newList.findIndex(el => el.phoneNumber === payload.phoneNumber);
      if (idx !== -1) {
        const userOBJ = Object.assign({
          phoneNumber: payload.phoneNumber,
          timeOTP: [],
          timeResend: []
        });
        newList[idx] = userOBJ;
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        profile: {
          ...state.profile,
          phone: action.payload.phoneNumber
        },
        message: '',
        changePhoneList: newList
      };
    }

    case PROFILE.CONFIRM_CODE_PROFILE.FAILURE: {
      const { phoneNumber, data, message } = action.payload;
      let newList = state.changePhoneList.slice();

      const time = new Date();
      const millisecond = time.getTime();
      const idx = newList.findIndex(el => el.phoneNumber === phoneNumber);

      if (idx === -1) {
        const userOBJ = Object.assign({
          phoneNumber: phoneNumber,
          timeOTP: [millisecond],
          timeResend: []
        });
        newList = [...state.changePhoneList, userOBJ];
      } else {
        newList = newList.map(el => {
          if (el.phoneNumber === phoneNumber) {
            let newArr = el.timeOTP.slice();
            if (newArr.length < 3) {
              newArr.push(millisecond);
            } else {
              newArr.splice(0, 3, millisecond);
            }

            return {
              ...el,
              timeOTP: newArr
            };
          } else {
            return el;
          }
        });
      }
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: I18n.t('errMessage.pin_not_correct'),
        changePhoneList: newList
      };
    }

    case PROFILE.VERIFY_OTP_EMAIL.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        profile: {
          ...state.profile,
          email: action.payload.email,
          isEmailVerified: 1
        }
      };
    }

    case PROFILE.VERIFY_OTP_EMAIL.FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.message
      };
    }

    case PROFILE.CLEAR_ERROR.CLEAR: {
      return {
        ...state,
        isError: false,
        isSuccess: false,
        message: ''
      };
    }

    case PROFILE.CLEAR_PROFILE.HANDLER: {
      return {
        ...state,
        profile: {}
      };
    }

    case PROFILE.EXISTED_PROFILE.SUCCESS: {
      return {
        ...state,
        isExisted: action.payload,
        isError: action.payload,
        message: action.payload ? I18n.t('profile.phone_existed') : ''
      };
    }

    default:
      return state;
  }
};

export default profile;
