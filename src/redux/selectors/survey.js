export const getSurveyByIdSelector = state => state.survey.survey;
export const getSurveySubmitSuccessSelector = state => state.survey.isSubmitSuccess;
export const getSurveySubmitFailedSelector = state => state.survey.isSubmitFailed;
export const getSurveyErrorMessageSelector = state => state.survey.errorMessage;
export const getSurveyDetailErrorSelector = state => state.survey.errorDetail;
export const getIsTakingSelector = state => state.survey.isTaking;
export const getSurveyErrorTakingMessageSelector = state => state.survey.errorTakingMessage;
export const getSurveyNotificationSelector = state => state.survey.notification;
