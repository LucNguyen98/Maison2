import { SURVEY } from 'actionsType';
import I18n from 'i18n-js';

const initialState = {
  survey: {},
  totalCount: 0,
  isSubmitSuccess: false,
  isSubmitFailed: false,
  errorDetail: '',
  errorMessage: '',
  errorTakingMessage: null,
  isTaking: false,
  notification: null
};

const surveys = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get all survey actions =====
     */
    case SURVEY.GET_SURVEY_BY_ID.HANDLER: {
      return {
        ...state,
        survey: {}
      };
    }
    case SURVEY.GET_SURVEY_BY_ID.SUCCESS: {
      return {
        ...state,
        survey: action.payload.article
      };
    }
    case SURVEY.GET_SURVEY_BY_ID.FAILURE: {
      return {
        ...state,
        errorDetail: ''
      };
    }
    /**
     * ===== submit survey answer =====
     */
    case SURVEY.SUBMIT_SURVEY_ANSWER.HANDLER: {
      return {
        ...state,
        isSubmitFailed: false,
        isSubmitSuccess: false
      };
    }
    case SURVEY.SUBMIT_SURVEY_ANSWER.SUCCESS: {
      return {
        ...state,
        isSubmitSuccess: true
      };
    }
    case SURVEY.SUBMIT_SURVEY_ANSWER.FAILURE: {
      return {
        ...state,
        isSubmitFailed: true,
        errorMessage: action.payload.message
      };
    }

    case SURVEY.CLEAR_SUBMIT_ERROR.CLEAR:
      return {
        ...state,
        isSubmitFailed: false,
        isSubmitSuccess: false,
        errorMessage: ''
      };

    /**
     * ===== submit survey answer =====
     */

    case SURVEY.CHECK_MEMBER_TAKING_SURVEY.HANDLER: {
      return {
        ...state
      };
    }
    case SURVEY.CHECK_MEMBER_TAKING_SURVEY.SUCCESS: {
      return {
        ...state,
        isTaking: action.payload.isTaking,
        errorTakingMessage: null,
        notification: null
      };
    }
    case SURVEY.CHECK_MEMBER_TAKING_SURVEY.FAILURE: {
      return {
        ...state,
        notification: null,
        errorTakingMessage: action.payload?.message ?? I18n.t('common.error')
      };
    }
    case SURVEY.CHECK_MEMBER_TAKING_SURVEY.CLEAR:
      return {
        ...state,
        isTaking: false,
        errorTakingMessage: null
      };

    case SURVEY.SET_SURVEY_FROM_NOTIFICATION:
      return {
        ...state,
        notification: action.payload?.notification
      };
    default:
      return state;
  }
};

export default surveys;
