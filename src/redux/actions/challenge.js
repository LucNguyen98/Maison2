import {CHALLENGE} from 'actionsType';

/**
 * ===== Get list by member code actions =====
 */
export const getChallengeByMemberCodeHandle = payload => ({
  type: CHALLENGE.GET_LIST_BY_MEMBER_CODE.HANDLER,
  payload,
});

export const getChallengeByMemberCodeSuccess = payload => ({
  type: CHALLENGE.GET_LIST_BY_MEMBER_CODE.SUCCESS,
  payload,
});

export const getChallengeByMemberCodeFailure = payload => ({
  type: CHALLENGE.GET_LIST_BY_MEMBER_CODE.FAILURE,
  payload,
});

/**
 * ===== Join challenge actions =====
 */
export const joinChallengeHandle = payload => ({
  type: CHALLENGE.JOIN_CHALLENGE.HANDLER,
  payload,
});

export const joinChallengeSuccess = payload => ({
  type: CHALLENGE.JOIN_CHALLENGE.SUCCESS,
  payload,
});

export const joinChallengeFailure = payload => ({
  type: CHALLENGE.JOIN_CHALLENGE.FAILURE,
  payload,
});

/**
 * ===== Get list challenge hot actions =====
 */
export const getListChallengeHotHandle = payload => ({
  type: CHALLENGE.GET_LIST_CHALLENGE_HOT.HANDLER,
  payload,
});

export const getListChallengeHotSuccess = payload => ({
  type: CHALLENGE.GET_LIST_CHALLENGE_HOT.SUCCESS,
  payload,
});

export const getListChallengeHotFailure = payload => ({
  type: CHALLENGE.GET_LIST_CHALLENGE_HOT.FAILURE,
  payload,
});

export const clearChallengesList = payload => ({
  type: CHALLENGE.CLEAR_CHALLENGES_LIST.CLEAR,
  payload,
});

/**
 * ===== Get my challenge actions =====
 */
export const getMyChallengeHandle = payload => ({
  type: CHALLENGE.GET_MY_CHALLENGE.HANDLER,
  payload,
});

export const getMyChallengeSuccess = payload => ({
  type: CHALLENGE.GET_MY_CHALLENGE.SUCCESS,
  payload,
});

export const getMyChallengeFailure = payload => ({
  type: CHALLENGE.GET_MY_CHALLENGE.FAILURE,
  payload,
});

/**
 * ===== Get challenge detail actions =====
 */
export const getChallengeDetailHandle = payload => ({
  type: CHALLENGE.GET_CHALLENGE_DETAIL.HANDLER,
  payload,
});

export const getChallengeDetailSuccess = payload => ({
  type: CHALLENGE.GET_CHALLENGE_DETAIL.SUCCESS,
  payload,
});

export const getChallengeDetailFailure = payload => ({
  type: CHALLENGE.GET_CHALLENGE_DETAIL.FAILURE,
  payload,
});

export const resetError = payload => ({
  type: CHALLENGE.RESET_ERROR.HANDLER,
  payload,
});
