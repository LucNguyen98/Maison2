import { SURVEY } from 'actionsType';

/**
 * ===== Get all survey actions =====
 */
export const getSurveyByIdHandle = payload => ({
  type: SURVEY.GET_SURVEY_BY_ID.HANDLER,
  payload
});

export const getSurveyByIdSuccess = payload => ({
  type: SURVEY.GET_SURVEY_BY_ID.SUCCESS,
  payload
});

export const getSurveyByIdFailure = payload => ({
  type: SURVEY.GET_SURVEY_BY_ID.FAILURE,
  payload
});
/**
 * ===== submit survey answer actions  =====
 */
export const submitSurveyAnswerHandle = payload => ({
  type: SURVEY.SUBMIT_SURVEY_ANSWER.HANDLER,
  payload
});

export const submitSurveyAnswerSuccess = payload => ({
  type: SURVEY.SUBMIT_SURVEY_ANSWER.SUCCESS,
  payload
});

export const submitSurveyAnswerFailure = payload => ({
  type: SURVEY.SUBMIT_SURVEY_ANSWER.FAILURE,
  payload
});

export const clearSubmitSurveyError = () => ({
  type: SURVEY.CLEAR_SUBMIT_ERROR.CLEAR
});

/**
 * ===== check member taking survey actions  =====
 */
export const checkMemberTakingSurveyHandle = payload => ({
  type: SURVEY.CHECK_MEMBER_TAKING_SURVEY.HANDLER,
  payload
});

export const checkMemberTakingSurveySuccess = payload => ({
  type: SURVEY.CHECK_MEMBER_TAKING_SURVEY.SUCCESS,
  payload
});

export const checkMemberTakingSurveyFailure = payload => ({
  type: SURVEY.CHECK_MEMBER_TAKING_SURVEY.FAILURE,
  payload
});

export const clearCheckMemberTakingSurveyError = () => ({
  type: SURVEY.CHECK_MEMBER_TAKING_SURVEY.CLEAR
});

export const setSurveyFromNotification = payload => ({
  type: SURVEY.SET_SURVEY_FROM_NOTIFICATION,
  payload
});
