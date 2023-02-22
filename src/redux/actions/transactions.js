import { TRANSACTIONS } from 'actionsType';

/**
 * ===== Get claim history actions =====
 */
export const getClaimHistoryHandle = payload => ({
  type: TRANSACTIONS.GET_CLAIM_HISTORY.HANDLER,
  payload
});

export const getClaimHistorySuccess = payload => ({
  type: TRANSACTIONS.GET_CLAIM_HISTORY.SUCCESS,
  payload
});

export const getClaimHistoryFailure = payload => ({
  type: TRANSACTIONS.GET_CLAIM_HISTORY.FAILURE,
  payload
});

/**
 * ===== Get redeem history actions =====
 */
export const getRedeemHistoryHandle = payload => ({
  type: TRANSACTIONS.GET_REDEEM_HISTORY.HANDLER,
  payload
});

export const getRedeemHistorySuccess = payload => ({
  type: TRANSACTIONS.GET_REDEEM_HISTORY.SUCCESS,
  payload
});

export const getRedeemHistoryFailure = payload => ({
  type: TRANSACTIONS.GET_REDEEM_HISTORY.FAILURE,
  payload
});

/**
 * ===== Get order history actions =====
 */
export const getOrderHistoryHandle = payload => ({
  type: TRANSACTIONS.GET_ORDER_HISTORY.HANDLER,
  payload
});

export const getOrderHistorySuccess = payload => ({
  type: TRANSACTIONS.GET_ORDER_HISTORY.SUCCESS,
  payload
});

export const getOrderHistoryFailure = payload => ({
  type: TRANSACTIONS.GET_ORDER_HISTORY.FAILURE,
  payload
});

/**
 * ===== Clear transactions actions =====
 */
export const clearTransactions = payload => ({
  type: TRANSACTIONS.CLEAR_TRANSACTIONS.CLEAR,
  payload
});
