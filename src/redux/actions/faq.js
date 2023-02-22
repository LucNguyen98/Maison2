import { FAQ } from 'actionsType';

/**
 * ===== Get all FAQ actions =====
 */
export const getAllFAQHandle = payload => ({
  type: FAQ.GET_ALL_FAQ.HANDLER,
  payload
});

export const getAllFAQSuccess = payload => ({
  type: FAQ.GET_ALL_FAQ.SUCCESS,
  payload
});

export const getAllFAQFailure = payload => ({
  type: FAQ.GET_ALL_FAQ.FAILURE,
  payload
});

/**
 * ===== Get all FAQ Filter actions =====
 */
export const getAllFAQFilterHandle = payload => ({
  type: FAQ.GET_ALL_FAQ_FILTER.HANDLER,
  payload
});

export const getAllFAQFilterSuccess = payload => ({
  type: FAQ.GET_ALL_FAQ_FILTER.SUCCESS,
  payload
});

export const getAllFAQFilterFailure = payload => ({
  type: FAQ.GET_ALL_FAQ_FILTER.FAILURE,
  payload
});

/**
 * ===== Get all FAQ Filter actions =====
 */
export const getPolicyHandle = payload => ({
  type: FAQ.GET_POLICY.HANDLER,
  payload
});

export const getPolicySuccess = payload => ({
  type: FAQ.GET_POLICY.SUCCESS,
  payload
});

export const getPolicyFailure = payload => ({
  type: FAQ.GET_POLICY.FAILURE,
  payload
});

/**
 * ===== submit support request actions =====
 */
export const SubmitSupportRequestHandle = payload => ({
  type: FAQ.SUBMIT_SUPPORT_REQUEST.HANDLER,
  payload
});

export const SubmitSupportRequestSuccess = payload => ({
  type: FAQ.SUBMIT_SUPPORT_REQUEST.SUCCESS,
  payload
});

export const SubmitSupportRequestFailure = payload => ({
  type: FAQ.SUBMIT_SUPPORT_REQUEST.FAILURE,
  payload
});

export const SubmitSupportRequestClear = payload => ({
  type: FAQ.SUBMIT_SUPPORT_REQUEST.CLEAR,
  payload
});
