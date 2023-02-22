import { RANK } from 'actionsType';

/**
 * ===== Get all ranks actions =====
 */
export const getAllRanksHandle = payload => ({
  type: RANK.GET_ALL_RANKS.HANDLER,
  payload
});

export const getAllRanksSuccess = payload => ({
  type: RANK.GET_ALL_RANKS.SUCCESS,
  payload
});

export const getAllRanksFailure = payload => ({
  type: RANK.GET_ALL_RANKS.FAILURE,
  payload
});
