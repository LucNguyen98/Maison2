import { STORE } from 'actionsType';

/**
 * ===== Get all store actions =====
 */
export const getAllStoreHandle = payload => ({
  type: STORE.GET_ALL_STORE.HANDLER,
  payload
});

export const getAllStoreSuccess = payload => ({
  type: STORE.GET_ALL_STORE.SUCCESS,
  payload
});

export const getAllStoreFailure = payload => ({
  type: STORE.GET_ALL_STORE.FAILURE,
  payload
});

/**
 * ===== Get store filter actions =====
 */
export const getStoreFilterHandle = payload => ({
  type: STORE.GET_STORE_FILTER.HANDLER,
  payload
});

export const getStoreFilterSuccess = payload => ({
  type: STORE.GET_STORE_FILTER.SUCCESS,
  payload
});

export const getStoreFilterFailure = payload => ({
  type: STORE.GET_STORE_FILTER.FAILURE,
  payload
});
