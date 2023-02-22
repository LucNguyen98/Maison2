import { SYSTEM } from 'actionsType';

/**
 * ===== Get all system actions =====
 */
export const getShowAlertError = payload => ({
  type: SYSTEM.SHOW_ERROR.STORE,
  payload
});

export const getClearAlertError = () => ({
  type: SYSTEM.CLEAR_ERROR.CLEAR
});

export const updateStatusConnection = payload => ({
  type: SYSTEM.UPDATE_CONNECTION_STATUS.STORE,
  payload
});

export const setNeedUpdateVersion = payload => ({
  type: SYSTEM.SET_NEED_UPDATE_VERSION,
  payload
});
