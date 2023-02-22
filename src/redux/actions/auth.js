import {clearProfileHandle} from 'actions/profile';
import {confirmCurrentPinCodeClear} from 'actions/security';
import {AUTH} from 'actionsType';
import {store} from 'src/app';
/**
 * ===== Check existed actions =====
 */
export const checkExistedHandle = payload => ({
  type: AUTH.CHECK_EXISTED.HANDLER,
  payload,
});

export const checkExistedSuccess = payload => ({
  type: AUTH.CHECK_EXISTED.SUCCESS,
  payload,
});

export const checkExistedFailure = payload => ({
  type: AUTH.CHECK_EXISTED.FAILURE,
  payload,
});

/**
 * ===== Get OTP actions =====
 */
export const getOTPHandle = payload => ({
  type: AUTH.GET_OTP.HANDLER,
  payload,
});

export const getOTPSuccess = payload => ({
  type: AUTH.GET_OTP.SUCCESS,
  payload,
});

export const getOTPFailure = payload => ({
  type: AUTH.GET_OTP.FAILURE,
  payload,
});

export const getOTPInAppHandle = payload => ({
  type: AUTH.GET_OTP_IN_APP.HANDLER,
  payload,
});

export const getOTPInAppSuccess = payload => ({
  type: AUTH.GET_OTP_IN_APP.SUCCESS,
  payload,
});

export const getOTPInAppFailure = payload => ({
  type: AUTH.GET_OTP_IN_APP.FAILURE,
  payload,
});

/**
 * ===== Confirm otp actions =====
 */
export const getConfirmOTPHandle = payload => ({
  type: AUTH.CONFIRM_OTP.HANDLER,
  payload,
});

export const getConfirmOTPSuccess = payload => {
  return {
    type: AUTH.CONFIRM_OTP.SUCCESS,
    payload,
  };
};

export const getConfirmOTPFailure = payload => ({
  type: AUTH.CONFIRM_OTP.FAILURE,
  payload,
});

export const getConfirmOTPEnd = payload => ({
  type: AUTH.CONFIRM_OTP.END,
  payload,
});

export const storeRefreshDataFirebase = payload => ({
  type: AUTH.REFRESH_TOKEN.STORE,
  payload,
});

/**
 * ===== Verify referral actions =====
 */
export const getVerifyReferralHandle = payload => ({
  type: AUTH.VERIFY_REFERRAL.HANDLER,
  payload,
});

export const getVerifyReferralSuccess = payload => ({
  type: AUTH.VERIFY_REFERRAL.SUCCESS,
  payload,
});

export const getVerifyReferralFailure = payload => ({
  type: AUTH.VERIFY_REFERRAL.FAILURE,
  payload,
});

export const getVerifyReferralEnd = payload => ({
  type: AUTH.VERIFY_REFERRAL.END,
  payload,
});

/**
 *  ===== Log out actions =====
 */

export const getLogOutHandle = payload => {
  store.dispatch(clearProfileHandle());
  store.dispatch(confirmCurrentPinCodeClear());
  return {
    type: AUTH.LOG_OUT.CLEAR,
    payload,
  };
};

export const getClearErrorHandle = payload => ({
  type: AUTH.CLEAR_ERROR.CLEAR,
  payload,
});

/**
 *  ===== User actions =====
 */

export const getMemberViewPointHandle = payload => ({
  type: AUTH.MEMBER_VIEW_POINT.HANDLER,
  payload,
});

export const getMemberViewPointSuccess = payload => ({
  type: AUTH.MEMBER_VIEW_POINT.SUCCESS,
  payload,
});

export const getMemberViewPointFailure = payload => ({
  type: AUTH.MEMBER_VIEW_POINT.FAILURE,
  payload,
});

/**
 *  ===== User actions =====
 */

export const getInputActionHandle = payload => ({
  type: AUTH.INPUT_ACTION.HANDLER,
  payload,
});

export const getInputActionSuccess = payload => ({
  type: AUTH.INPUT_ACTION.SUCCESS,
  payload,
});

export const getInputActionFailure = payload => ({
  type: AUTH.INPUT_ACTION.FAILURE,
  payload,
});

/**
 *  ===== pin code actions =====
 */

export const setupPinCodeHandler = payload => ({
  type: AUTH.SETUP_PIN_CODE.HANDLER,
  payload,
});

export const getLoginPinCodeHandle = payload => ({
  type: AUTH.LOGIN_PIN_CODE.HANDLER,
  payload,
});

export const getLoginPinCodeSuccess = payload => ({
  type: AUTH.LOGIN_PIN_CODE.SUCCESS,
  payload,
});

export const getLoginPinCodeFailure = payload => ({
  type: AUTH.LOGIN_PIN_CODE.FAILURE,
  payload,
});

export const getLoginPinCodeEnd = payload => ({
  type: AUTH.LOGIN_PIN_CODE.END,
  payload,
});

export const turnOnLoginPinCodeHandle = payload => ({
  type: AUTH.TURNON_LOGIN_PIN_CODE.HANDLER,
  payload,
});

export const turnOffLoginPinCodeHandle = payload => ({
  type: AUTH.TURNOFF_LOGIN_PIN_CODE.HANDLER,
  payload,
});

/**
 * ===== Biometric actions =====
 */
export const changeToggleBiometric = payload => ({
  type: AUTH.TOGGLE_BIOMETRIC.CHANGE,
  payload,
});

export const loginBiometricSuccess = payload => ({
  type: AUTH.LOGIN_BIOMETRIC.SUCCESS,
  payload,
});

export const loginBiometricFailure = payload => ({
  type: AUTH.LOGIN_BIOMETRIC.FAILURE,
  payload,
});

export const loginBiometricClear = payload => ({
  type: AUTH.LOGIN_BIOMETRIC.CLEAR,
  payload,
});

export const resetError = payload => ({
  type: AUTH.RESET_ERROR.HANDLER,
  payload,
});
/**
 * ===== Update phone number actions =====
 */
export const updatePhoneNumberHandle = payload => ({
  type: AUTH.UPDATE_PHONE_NUMBER.HANDLER,
  payload,
});

export const updateTokenHandle = payload => ({
  type: AUTH.UPDATE_TOKEN.HANDLER,
  payload,
});

/**
 * ===== Get AccessToken actions =====
 */
export const getRefreshTokenHandle = payload => ({
  type: AUTH.GET_REFRESH_TOKEN.HANDLER,
  payload,
});

export const getRefreshTokenSuccess = payload => ({
  type: AUTH.GET_REFRESH_TOKEN.SUCCESS,
  payload,
});

export const getRefreshTokenFailure = payload => ({
  type: AUTH.GET_REFRESH_TOKEN.FAILURE,
  payload,
});

/**
 * ===== Get RefreshToken actions =====
 */
export const getAccessTokenHandle = payload => ({
  type: AUTH.GET_ACCESS_TOKEN.HANDLER,
  payload,
});

export const getAccessTokenSuccess = payload => ({
  type: AUTH.GET_ACCESS_TOKEN.SUCCESS,
  payload,
});

export const getAccessTokenFailure = payload => ({
  type: AUTH.GET_ACCESS_TOKEN.FAILURE,
  payload,
});

/**
 * ===== Request delete account actions =====
 */
export const requestDeleteAccountHandle = payload => ({
  type: AUTH.REQUEST_DELETE_ACCOUNT.HANDLER,
  payload,
});

export const requestDeleteAccountSuccess = payload => ({
  type: AUTH.REQUEST_DELETE_ACCOUNT.SUCCESS,
  payload,
});

export const requestDeleteAccountFailure = payload => ({
  type: AUTH.REQUEST_DELETE_ACCOUNT.FAILURE,
  payload,
});

export const clearRequestDeleteAccount = payload => ({
  type: AUTH.REQUEST_DELETE_ACCOUNT.CLEAR,
  payload,
});
