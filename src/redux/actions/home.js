import { HOME } from 'actionsType';

/**
 * ===== Get home data actions =====
 */
export const getHomeDataHandle = payload => ({
  type: HOME.GET_HOME_DATA.HANDLER,
  payload
});

export const getHomeDataSuccess = payload => ({
  type: HOME.GET_HOME_DATA.SUCCESS,
  payload
});

export const getHomeDataFailure = payload => ({
  type: HOME.GET_HOME_DATA.FAILURE,
  payload
});

/**
 * ===== Get popup actions =====
 */
export const getPopupByMemberCodeHandle = payload => ({
  type: HOME.GET_POP_UP.HANDLER,
  payload
});

export const getPopupByMemberCodeSuccess = payload => ({
  type: HOME.GET_POP_UP.SUCCESS,
  payload
});

export const getPopupByMemberCodeFailure = payload => ({
  type: HOME.GET_POP_UP.FAILURE,
  payload
});
