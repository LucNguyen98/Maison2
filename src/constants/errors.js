import I18n from 'src/i18n';
export const RESPONSE_CODE = {
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIME_OUT: 408,
  UNAUTHORIZED_STATUS: 401,
  REFETCH_FAILED: 'REFETCH_FAILED',
  NOT_INTERNET: 'NOT_INTERNET',
  UNDEFINED: 'UNDEFINED',
  UNKNOWN: 'UNKNOWN',
  // auth
  SUCCESS: 'SUCCESS',
  QRCODE_EXPIRES: 'QRCODE_EXPIRES',
  LOGIN_FAILED: 'LOGIN_FAILED',
  INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
  INVALID_USER_VERIFICATION_CODE: 'auth/invalid-verification-code',
  NETWORK_REQUEST_FAILED: 'auth/network-request-failed',
  AUTH_UNKNOWN: 'auth/unknown',
  TOO_MANY_REQUESTS: 'auth/too-many-requests',
  AUTH_SESSION_EXPIRED: 'auth/session-expired',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  ALREADY_EXIST: 'ALREADY_EXIST',
  OVER_SEND: 'OVER_SEND',
  NOT_ENOUGH_TIME: 'NOT_ENOUGH_TIME',
  TIMES_OVER: 'TIMES_OVER',
  PARTNER_NOT_FOUND: 'PARTNER_NOT_FOUND',
  BRANCH_NOT_FOUND: 'BRANCH_NOT_FOUND',
  PARAM_INVALID: 'PARAM_INVALID',
  USER_NOT_FOUND_WITH_CODE: 'USER_NOT_FOUND_WITH_CODE',
  VOCABULARY_NOT_FOUND: 'VOCABULARY_NOT_FOUND',
  ALREADY_RATING: 'ALREADY_RATING',
  NOT_RATING: 'NOT_RATING',
  INSERT_FEEDBACK_FAILD: 'INSERT_FEEDBACK_FAILD',
  CLASS_NOT_FOUND: 'CLASS_NOT_FOUND',
  NEWS_NOT_FOUND: 'NEWS_NOT_FOUND',
  LOGIN_WITH_MOBILE_FAILED: 'LOGIN_WITH_MOBILE_FAILED',
  LOGIN_WITH_EMAIL_FAILED: 'LOGIN_WITH_EMAIL_FAILED',
  // coupon
  COUPON_NOT_FOUND: 'COUPON_NOT_FOUND',
  TALKS_POINT_NOT_ENOUGH: 'TALKS_POINT_NOT_ENOUGH',
  TEACHER_TIME_OUT_CONFIRM: 'TEACHER_TIME_OUT_CONFIRM',
  ALREADY_CONFIRM: 'ALREADY_CONFIRM',
  TEACHER_CONFIRM_FAILED: 'TEACHER_CONFIRM_FAILD',
  TEACHER_FEEDBACK_FAILED: 'TEACHER_FEEDBACK_FAILD',
  CLAIM_COUPON_FAILED: 'CLAIM_COUPON_FAILD'
};

export const GUEST_MESSAGE = {
  code: null,
  message: I18n.t('errMessage.please_login'),
  canLogOut: true,
  button: true,
  whiteButton: true
};

export const EXPIRED_SESSION = {
  code: null,
  message: I18n.t('errMessage.session_error'),
  canLogOut: true,
  button: true,
  whiteButton: false
};

export const LOGIN_MESSAGE = {
  code: null,
  message: I18n.t('errMessage.welcome_oldMember')
};

export const PINCODE_SUCCESS_MESSAGE = {
  code: 'success',
  message: I18n.t('auth.pinCode_success')
};

export const FACEID_SUCCESS_MESSAGE = {
  code: 'success',
  message: I18n.t('auth.faceID_success')
};

export const FINGER_SUCCESS_MESSAGE = {
  code: 'success',
  message: I18n.t('auth.finger_success')
};

export const FACEID_FAILED_MESSAGE = {
  code: 'failed-faceId',
  message: I18n.t('auth.faceID_success')
};

export const FINGER_FAILED_MESSAGE = {
  code: 'failed-finger',
  message: I18n.t('auth.finger_success')
};

export const REGISTER_MESSAGE = {
  code: null,
  message: I18n.t('errMessage.welcome_newMember')
};

export const LOGIN_SUCCESS_MESSAGE = {
  code: null,
  message: I18n.t('auth.login_success')
};

export const REGISTER_SUCCESS_MESSAGE = {
  code: 'success',
  message: I18n.t('auth.register_success')
};

export const QRCODE_ERROR_MESSAGE = {
  code: null,
  message: I18n.t('scan.please_check')
};

export const INPUT_SUCCESS_MESSAGE = {
  code: null,
  title: '',
  message: 'Quét mã thành công.'
};

export const READ_NEW_SUCCESS_MESSAGE = {
  code: null,
  message: I18n.t('news.bonus')
};

export const UNAVAILABLE_NEWS = {
  code: 'error',
  message: I18n.t('errMessage.news_not_found')
};

export const UNAVAILABLE_CHALLENGE = {
  code: 'error',
  message: I18n.t('errMessage.challenge_not_found')
};

export const UNAVAILABLE_EVENT = {
  code: 'error',
  message: I18n.t('errMessage.notification_not_found')
};

export const UNAVAILABLE_VOUCHER = {
  code: 'error',
  message: I18n.t('errMessage.notification_not_found')
};

export const UNAVAILABLE_SURVEY = {
  code: 'error',
  message: I18n.t('errMessage.error_tryAgain')
};

export const EXPRIED_SURVEY = {
  code: 'error',
  message: I18n.t('errMessage.survey_expired')
};

export const CHANGE_EMAIL_SUCCESS = {
  code: 'success',
  message: I18n.t('profile.email_success')
};

export const TURN_OFF_PIN_CODE = {
  code: 'success',
  message: I18n.t('pinCode.turnOffPinCode')
};

export const SEND_HELP_SUCCESS = {
  code: 'success',
  message: I18n.t('help.sucess')
};

export const SEND_HELP_FAIL = {
  code: 'error',
  message: I18n.t('help.failure')
};

export const REDEEM_SUCCESS = {
  code: 'success',
  message: I18n.t('voucher.redeem_success')
};

export const WISHLIST_FAILURE = {
  code: 'error',
  message: I18n.t('voucher.wishlist_failure')
};
