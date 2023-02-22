export const getMemberViewPointSelector = state => state.auth.usersInfo[0]?.memberInfo;
export const getDataFirebaseSelector = state => state.auth.usersInfo[0];
export const getListUserSelector = state => state.auth.usersInfo;
export const getVisibleModalSelector = state => state.auth.visibleModal;
export const getPhoneNumberSelector = state => state.auth.usersInfo[0]?.phoneNumber;
export const getIsExistedSelector = state => state.auth.isExisted;
export const getIsFirstDown = state => state.auth.isFirstDown;
export const getGuestSelector = state => state.auth.isGuest;
export const getPhoneNumberSecondSelector = state => state.auth.usersInfo[1]?.phoneNumber;

/**
 *
 * @param {*} state
 */
export const getErrorMessageSelector = state => state.auth.message;
export const getIsErrorSelector = state => state.auth.isError;
export const getIsSuccessPINSelector = state => state.auth.usersInfo[0]?.isSuccessPIN;

export const getIsSuccessInputActionSelector = state => state.auth.isSuccessInputAction;
export const getInputActionErrorSelector = state => state.auth.inputActionError;
export const getInputActionResultSelector = state => state.auth.inputActionResult;
export const getLoginListSelector = state => state.auth.loginList;
export const getMemberTypeCodeSelector = state => state.auth.memberTypeCode;
export const getOtpInAppSelector = state => state.auth.otpInApp;
export const getRankTypeCodeSelector = state => state.auth.rankTypeCode;
export const getMemberIdSelector = state => state.auth.memberId;
export const getReferenceInfoSelector = state => state.auth.referenceInfo;
export const getIsRequestDeletedSelector = state => state.auth.isRequestDeleted;
export const getRequestDeletedErrorSelector = state => state.auth.requestDeletedError;
