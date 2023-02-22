export const getClaimHistorySelector = state => state.transaction.claimHistory;
export const getRedeemHistorySelector = state => state.transaction.redeemHistory;
export const getOrderHistorySelector = state => state.transaction.orderHistory;

export const getTotalOrderSelector = state => state.transaction.totalOrder;
export const getTotalClaimSelector = state => state.transaction.totalClaim;
export const getTotalRedeemSelector = state => state.transaction.totalRedeem;
