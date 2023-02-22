import { EVENT } from 'actionsType';

/**
 * ===== Get all event actions =====
 */
export const getAllEventHandle = payload => ({
  type: EVENT.GET_ALL_EVENT.HANDLER,
  payload
});

export const getAllEventSuccess = payload => ({
  type: EVENT.GET_ALL_EVENT.SUCCESS,
  payload
});

export const getAllEventFailure = payload => ({
  type: EVENT.GET_ALL_EVENT.FAILURE,
  payload
});

/**
 * ===== Submit event response actions =====
 */
export const submitEventResponseHandle = payload => ({
  type: EVENT.SUBMIT_EVENT_RESPONSE.HANDLER,
  payload
});

export const submitEventResponseSuccess = payload => ({
  type: EVENT.SUBMIT_EVENT_RESPONSE.SUCCESS,
  payload
});

export const submitEventResponseFailure = payload => ({
  type: EVENT.SUBMIT_EVENT_RESPONSE.FAILURE,
  payload
});

/**
 * ===== List calendar actions =====
 */
export const storeListCalendarHandle = payload => ({
  type: EVENT.STORE_LIST_CALENDAR.HANDLER,
  payload
});

export const removeEventCalendarHandle = payload => ({
  type: EVENT.REMOVE_EVENT_CALENDAR.HANDLER,
  payload
});

export const clearEventCalendar = payload => ({
  type: EVENT.CLEAR_EVENT_CALENDAR.CLEAR,
  payload
});

/**
 * ===== Get all my event actions =====
 */
export const getAllMyEventHandle = payload => ({
  type: EVENT.GET_ALL_MY_EVENT.HANDLER,
  payload
});

export const getAllMyEventSuccess = payload => ({
  type: EVENT.GET_ALL_MY_EVENT.SUCCESS,
  payload
});

export const getAllMyEventFailure = payload => ({
  type: EVENT.GET_ALL_MY_EVENT.FAILURE,
  payload
});

/**
 * ===== Get my event actions =====
 */
export const getMyEventFilterHandle = payload => ({
  type: EVENT.GET_MY_EVENT_FILTER.HANDLER,
  payload
});

export const getMyEventFilterSuccess = payload => ({
  type: EVENT.GET_MY_EVENT_FILTER.SUCCESS,
  payload
});

export const getMyEventFilterFailure = payload => ({
  type: EVENT.GET_MY_EVENT_FILTER.FAILURE,
  payload
});

/**
 * ===== Get event detail actions =====
 */
export const getEventDetailHandle = payload => ({
  type: EVENT.GET_EVENT_DETAIL.HANDLER,
  payload
});

export const getEventDetailSuccess = payload => ({
  type: EVENT.GET_EVENT_DETAIL.SUCCESS,
  payload
});

export const getEventDetailFailure = payload => ({
  type: EVENT.GET_EVENT_DETAIL.FAILURE,
  payload
});
