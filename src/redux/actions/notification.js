import { NOTIFICATION } from 'actionsType';

/**
 * ===== Get all notification actions =====
 */
export const getAllNotificationsHandle = payload => ({
  type: NOTIFICATION.GET_ALL_NOTIFICATION.HANDLER,
  payload
});

export const getAllNotificationsSuccess = payload => ({
  type: NOTIFICATION.GET_ALL_NOTIFICATION.SUCCESS,
  payload
});

export const getAllNotificationsFailure = payload => ({
  type: NOTIFICATION.GET_ALL_NOTIFICATION.FAILURE,
  payload
});

/**
 * ===== Get general notification actions =====
 */
export const getGeneralNotificationsHandle = payload => ({
  type: NOTIFICATION.GET_GENERAL_NOTIFICATION.HANDLER,
  payload
});

export const getGeneralNotificationsSuccess = payload => ({
  type: NOTIFICATION.GET_GENERAL_NOTIFICATION.SUCCESS,
  payload
});

export const getGeneralNotificationsFailure = payload => ({
  type: NOTIFICATION.GET_GENERAL_NOTIFICATION.FAILURE,
  payload
});

/**
 * ===== Get private notification actions =====
 */
export const getPrivateNotificationsHandle = payload => ({
  type: NOTIFICATION.GET_PRIVATE_NOTIFICATION.HANDLER,
  payload
});

export const getPrivateNotificationsSuccess = payload => ({
  type: NOTIFICATION.GET_PRIVATE_NOTIFICATION.SUCCESS,
  payload
});

export const getPrivateNotificationsFailure = payload => ({
  type: NOTIFICATION.GET_PRIVATE_NOTIFICATION.FAILURE,
  payload
});

/**
 * ===== Delete notification actions =====
 */
export const getDeleteNotificationHandle = payload => ({
  type: NOTIFICATION.DELETE_NOTIFICATION.HANDLER,
  payload
});

export const getDeleteNotificationSuccess = payload => ({
  type: NOTIFICATION.DELETE_NOTIFICATION.SUCCESS,
  payload
});

export const getDeleteNotificationFailure = payload => ({
  type: NOTIFICATION.DELETE_NOTIFICATION.FAILURE,
  payload
});

/**
 * ===== read notification actions =====
 */
export const getReadNotificationHandle = payload => ({
  type: NOTIFICATION.READ_NOTIFICATION.HANDLER,
  payload
});

export const getReadNotificationSuccess = payload => ({
  type: NOTIFICATION.READ_NOTIFICATION.SUCCESS,
  payload
});

export const getReadNotificationFailure = payload => ({
  type: NOTIFICATION.READ_NOTIFICATION.FAILURE,
  payload
});

/**
 * ===== update notification setting actions =====
 */
export const getNotificationSettingHandle = payload => ({
  type: NOTIFICATION.GET_NOTIFICATION_SETTING.HANDLER,
  payload
});

export const getNotificationSettingSuccess = payload => ({
  type: NOTIFICATION.GET_NOTIFICATION_SETTING.SUCCESS,
  payload
});

export const getNotificationSettingFailure = payload => ({
  type: NOTIFICATION.GET_NOTIFICATION_SETTING.FAILURE,
  payload
});

/**
 * ===== update notification setting actions =====
 */
export const getUpdateNotificationSettingHandle = payload => ({
  type: NOTIFICATION.UPDATE_NOTIFICATION_SETTING.HANDLER,
  payload
});

export const getUpdateNotificationSettingSuccess = payload => ({
  type: NOTIFICATION.UPDATE_NOTIFICATION_SETTING.SUCCESS,
  payload
});

export const getUpdateNotificationSettingFailure = payload => ({
  type: NOTIFICATION.UPDATE_NOTIFICATION_SETTING.FAILURE,
  payload
});

export const saveUpdateNotificationSettingFailure = payload => ({
  type: NOTIFICATION.UPDATE_NOTIFICATION_SETTING.STORE,
  payload
});

export const clearNotification = payload => ({
  type: NOTIFICATION.REMOVE_ALL_NOTIFICATION.CLEAR,
  payload
});
