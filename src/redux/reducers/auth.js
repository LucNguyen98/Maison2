import { AUTH } from 'actionsType';
import I18n from 'src/i18n';

const GUEST_PHONE = '0283936942';

const initialState = {
  message: '',
  isGuest: false,
  isExisted: {},
  isError: false,
  isFirstDown: false,
  usersInfo: [],
  isSuccessInputAction: false,
  inputActionError: {},
  inputActionResult: {},
  loginList: [],
  memberTypeCode: '',
  rankTypeCode: '',
  referenceInfo: '',
  otpInApp: {},
  memberId: '',
  isRequestDeleted: false,
  requestDeletedError: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Check existed actions =====
     */
    case AUTH.CHECK_EXISTED.HANDLER: {
      return {
        ...state,
        isError: false,
        message: ''
      };
    }
    case AUTH.CHECK_EXISTED.SUCCESS: {
      return {
        ...state
      };
    }
    case AUTH.CHECK_EXISTED.FAILURE: {
      return {
        ...state,
        isError: true,
        message: action.payload.message
      };
    }
    /**
     * ===== Get OTP actions =====
     */
    case AUTH.GET_OTP.HANDLER: {
      return {
        ...state
      };
    }
    case AUTH.GET_OTP.SUCCESS: {
      const { resend, phoneNumber } = action.payload;
      let newList = state.loginList.slice();
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
          newList = [...state.loginList, userOBJ];
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
        loginList: newList
      };
    }
    case AUTH.GET_OTP.FAILURE: {
      return {
        ...state,
        isError: true,
        message: action.payload.message
      };
    }

    case AUTH.GET_OTP_IN_APP.HANDLER: {
      return {
        ...state
      };
    }

    case AUTH.GET_OTP_IN_APP.SUCCESS: {
      return { ...state, otpInApp: action.payload };
    }

    case AUTH.GET_OTP_IN_APP.FAILURE: {
      return {
        ...state,
        isError: true,
        message: action.payload.message
      };
    }

    /**
     * ===== Confirm code login actions =====
     */
    case AUTH.CONFIRM_OTP.SUCCESS: {
      const { phoneNumber, memberCode, firebaseResponse } = action.payload;
      let newList = state.usersInfo.slice();
      let newListLogin = state.loginList.slice();

      const userIdx = newList.findIndex(el => el.phoneNumber === phoneNumber);
      const loginIdx = newListLogin.findIndex(el => el.phoneNumber === phoneNumber);
      if (userIdx === -1) {
        const userOBJ = Object.assign({
          phoneNumber,
          memberCode,
          firebaseResponse,
          memberInfo: {},
          pinCode: null,
          pinCodeFail: 0,
          allowPinCode: false,
          allowBiometric: false,
          biometricFail: false,
          timeResend: [],
          timeOTP: []
        });
        //if have less than 5 user
        if (newList.length < 5) {
          newList.unshift(userOBJ); // push into first
        } else {
          newList.unshift(userOBJ); // push into first
          newList = newList.slice(0, 4); // delete a last user
        }
      } else {
        newList = newList.map(el => {
          if (el.phoneNumber === phoneNumber) {
            return {
              ...el,
              firebaseResponse,
              pinCode: null,
              pinCodeFail: 0,
              allowPinCode: false,
              allowBiometric: false,
              memberCode
            };
          } else {
            return el;
          }
        });

        if (userIdx !== 0) {
          let item = newList.splice(userIdx, 1);
          newList.splice(0, 0, item[0]);
        }
      }

      if (loginIdx !== -1) {
        const userOBJ = Object.assign({
          phoneNumber: phoneNumber,
          timeResend: [],
          timeOTP: []
        });
        newListLogin[loginIdx] = userOBJ;
      }

      return {
        ...state,
        isFirstDown: true,
        isGuest: action.payload.phoneNumber === GUEST_PHONE ? true : false,
        usersInfo: newList,
        logged: true,
        loginList: newListLogin
      };
    }

    case AUTH.CONFIRM_OTP.FAILURE: {
      const { phoneNumber, message } = action.payload;
      let newList = state.loginList.slice();

      const time = new Date();
      const millisecond = time.getTime();
      const idx = newList.findIndex(el => el.phoneNumber === phoneNumber);

      if (idx === -1) {
        const userOBJ = Object.assign({
          phoneNumber: phoneNumber,
          timeResend: [],
          timeOTP: [millisecond]
        });
        newList = [...state.loginList, userOBJ];
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
        message: message,
        isError: true,
        loginList: newList
      };
    }

    case AUTH.CONFIRM_OTP.END: {
      return {
        ...state
      };
    }

    case AUTH.REFRESH_TOKEN.STORE: {
      const { accessToken, expirationTime } = action.payload;
      let newList = state.usersInfo.map((el, index) =>
        index === 0
          ? {
              ...el,
              firebaseResponse: { ...el.firebaseResponse, token: accessToken, expirationTime }
            }
          : el
      );

      return {
        ...state,
        usersInfo: newList
      };
    }

    /**
     * ===== Verify referral actions =====
     */
    case AUTH.VERIFY_REFERRAL.SUCCESS: {
      return {
        ...state
      };
    }
    case AUTH.VERIFY_REFERRAL.FAILURE: {
      return {
        ...state,
        message: action.payload.message,
        isError: true
      };
    }
    /**
     * ===== Log out actions =====
     */
    case AUTH.LOG_OUT.CLEAR: {
      const newList = state.usersInfo.map((el, index) =>
        index === 0 ? { ...el, firebaseResponse: { ...el.firebaseResponse, token: null } } : el
      );

      return {
        ...state,
        usersInfo: newList,
        isError: false,
        isGuest: false
      };
    }
    /**
     * ===== Log out actions =====
     */
    case AUTH.CLEAR_ERROR.CLEAR: {
      return {
        ...state,
        message: '',
        isGuest: false,
        isError: false
      };
    }

    /**
     * ===== user actions =====
     */
    case AUTH.MEMBER_VIEW_POINT.HANDLER: {
      return {
        ...state
      };
    }
    case AUTH.MEMBER_VIEW_POINT.SUCCESS: {
      const newList = state.usersInfo.map((el, index) =>
        index === 0
          ? {
              ...el,
              memberInfo: {
                ...action.payload.memberLoyaltyInfo,
                referralCode: action.payload.referralCode,
                avatar: action.payload.avatar
              }
            }
          : el
      );
      return {
        ...state,
        usersInfo: newList,
        //   memberTypeCode: action.payload.memberTypeCode,
        rankTypeCode: action.payload?.rankTypeCode,
        referenceInfo: action.payload?.referenceInfo,
        memberId: action.payload?.id
      };
    }
    case AUTH.MEMBER_VIEW_POINT.FAILURE: {
      return {
        ...state,
        message: '',
        isError: true
      };
    }

    /**
     * ===== pin code actions =====
     */
    case AUTH.SETUP_PIN_CODE.HANDLER: {
      const { pinCode } = action.payload;
      const newList = state.usersInfo.map((el, index) => (index === 0 ? { ...el, pinCode } : el));

      return {
        ...state,
        usersInfo: newList
      };
    }

    case AUTH.LOGIN_PIN_CODE.SUCCESS: {
      const { payload } = action;

      let newListLogin = state.loginList.slice();
      const loginIdx = newListLogin.findIndex(el => el.phoneNumber === payload.phoneNumber);

      let newList = state.usersInfo.map(el => {
        if (el.phoneNumber === payload.phoneNumber) {
          return {
            ...el,
            firebaseResponse: { ...el.firebaseResponse, token: payload.data.access_token },
            pinCodeFail: 0,
            biometricFail: false
          };
        } else {
          return el;
        }
      });

      const userIdx = newList.findIndex(el => el.phoneNumber === payload.phoneNumber);
      if (userIdx !== 0) {
        let item = newList.splice(userIdx, 1);
        newList.splice(0, 0, item[0]);
      }

      if (loginIdx !== -1) {
        const userOBJ = Object.assign({
          phoneNumber: payload.phoneNumber,
          timeResend: [],
          timeOTP: []
        });
        newListLogin[loginIdx] = userOBJ;
      }

      return {
        ...state,
        usersInfo: newList
      };
    }
    case AUTH.LOGIN_PIN_CODE.FAILURE: {
      let message = I18n.t('errMessage.pin_not_correct');
      let newList = state.usersInfo.map((el, index) => {
        if (index === 0) {
          if (el.pinCodeFail >= 2) {
            message = I18n.t('errMessage.incorrect_three_times');
          }
          return { ...el, pinCodeFail: el.pinCodeFail + 1 };
        } else {
          return el;
        }
      });

      return {
        ...state,
        isError: true,
        message: message,
        usersInfo: newList
      };
    }

    case AUTH.LOGIN_BIOMETRIC.FAILURE: {
      const newList = state.usersInfo.map((el, index) =>
        index === 0 ? { ...el, biometricFail: true, isSuccessPIN: false } : el
      );

      return {
        ...state,
        usersInfo: newList
      };
    }

    case AUTH.LOGIN_BIOMETRIC.CLEAR: {
      return {
        ...state,
        isError: false,
        isSuccessPIN: false
      };
    }

    case AUTH.TURNON_LOGIN_PIN_CODE.HANDLER: {
      const newList = state.usersInfo.map((el, index) =>
        index === 0 ? { ...el, allowPinCode: true } : el
      );

      return {
        ...state,
        usersInfo: newList
      };
    }

    case AUTH.TURNOFF_LOGIN_PIN_CODE.HANDLER: {
      const newList = state.usersInfo.map((el, index) =>
        index === 0 ? { ...el, allowPinCode: false } : el
      );

      return {
        ...state,
        usersInfo: newList
      };
    }

    case AUTH.TOGGLE_BIOMETRIC.CHANGE: {
      const newList = state.usersInfo.map((el, index) =>
        index === 0 ? { ...el, allowBiometric: !el.allowBiometric } : el
      );

      return {
        ...state,
        usersInfo: newList
      };
    }

    /**
     * ===== Get OTP actions =====
     */
    case AUTH.INPUT_ACTION.HANDLER: {
      return {
        ...state,
        isSuccessInputAction: true,
        inputActionError: {}
      };
    }
    case AUTH.INPUT_ACTION.SUCCESS: {
      return {
        ...state,
        isSuccessInputAction: false,
        inputActionResult: action.payload[0]
      };
    }
    case AUTH.INPUT_ACTION.FAILURE: {
      return {
        ...state,
        inputActionError: action.payload,
        isSuccessInputAction: false
      };
    }

    case AUTH.RESET_ERROR.HANDLER: {
      return {
        ...state,
        inputActionError: {}
      };
    }

    case AUTH.GET_ACCESS_TOKEN.SUCCESS: {
      const { accessToken, phoneNumber } = action.payload;

      let newList = state.usersInfo.map(el =>
        el.phoneNumber === phoneNumber
          ? { ...el, firebaseResponse: { ...el.firebaseResponse, token: accessToken } }
          : el
      );

      newList.unshift(
        newList.splice(
          newList.findIndex(item => item.phoneNumber === phoneNumber),
          1
        )[0]
      );

      console.log('newList', newList);

      return {
        ...state,
        usersInfo: newList
      };
    }

    case AUTH.UPDATE_TOKEN.HANDLER: {
      const { firebaseResponse } = action.payload;
      const newList = state.usersInfo.map((el, index) =>
        index === 0 ? { ...el, firebaseResponse } : el
      );
      return {
        ...state,
        usersInfo: newList
      };
    }

    /**
     * ===== Request delete account actions =====
     */
    case AUTH.REQUEST_DELETE_ACCOUNT.HANDLER: {
      return {
        ...state
      };
    }
    case AUTH.REQUEST_DELETE_ACCOUNT.SUCCESS: {
      return {
        ...state,
        isRequestDeleted: Boolean(action?.payload?.isRequestDeleted),
        requestDeletedError: null
      };
    }
    case AUTH.REQUEST_DELETE_ACCOUNT.FAILURE: {
      return {
        ...state,
        requestDeletedError: action.payload?.message ?? I18n.t('common.error')
      };
    }

    case AUTH.REQUEST_DELETE_ACCOUNT.CLEAR: {
      return {
        ...state,
        requestDeletedError: null
      };
    }

    default:
      return state;
  }
};

export default auth;
