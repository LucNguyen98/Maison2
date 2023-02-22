import { VOUCHER } from 'actionsType';

export const getListVouchersBySortingHandle = payload => ({
  type: VOUCHER.GET_LIST_VOUCHERS_BY_SORTING.HANDLER,
  payload
});

export const getListVouchersBySortingSuccess = payload => ({
  type: VOUCHER.GET_LIST_VOUCHERS_BY_SORTING.SUCCESS,
  payload
});

export const getListVouchersBySortingFailure = payload => ({
  type: VOUCHER.GET_LIST_VOUCHERS_BY_SORTING.FAILURE,
  payload
});

export const getListVoucherGroupHandle = payload => ({
  type: VOUCHER.GET_LIST_VOUCHERS_GROUP.HANDLER,
  payload
});

export const getListVoucherGroupSuccess = payload => ({
  type: VOUCHER.GET_LIST_VOUCHERS_GROUP.SUCCESS,
  payload
});

export const getListVoucherGroupFailure = payload => ({
  type: VOUCHER.GET_LIST_VOUCHERS_GROUP.FAILURE,
  payload
});

export const redeemVoucherHandle = payload => ({
  type: VOUCHER.REDEEM_VOUCHER.HANDLER,
  payload
});

export const redeemVoucherSuccess = payload => ({
  type: VOUCHER.REDEEM_VOUCHER.SUCCESS,
  payload
});

export const redeemVoucherFailure = payload => ({
  type: VOUCHER.REDEEM_VOUCHER.FAILURE,
  payload
});

export const redeemVoucherClear = payload => ({
  type: VOUCHER.REDEEM_VOUCHER.CLEAR,
  payload
});

export const getListRedeemedVoucherHandle = payload => ({
  type: VOUCHER.GET_LIST_REDEEMED_VOUCHER.HANDLER,
  payload
});

export const getListRedeemedVoucherSuccess = payload => ({
  type: VOUCHER.GET_LIST_REDEEMED_VOUCHER.SUCCESS,
  payload
});

export const getListRedeemedVoucherFailure = payload => ({
  type: VOUCHER.GET_LIST_REDEEMED_VOUCHER.FAILURE,
  payload
});

export const resetError = payload => ({
  type: VOUCHER.RESET_ERROR.HANDLER,
  payload
});

export const getListInactiveVouchersHandle = payload => ({
  type: VOUCHER.GET_LIST_INACTIVE_VOUCHER.HANDLER,
  payload
});

export const getListInactiveVouchersSuccess = payload => ({
  type: VOUCHER.GET_LIST_INACTIVE_VOUCHER.SUCCESS,
  payload
});

export const getListInactiveVouchersFailure = payload => ({
  type: VOUCHER.GET_LIST_INACTIVE_VOUCHER.FAILURE,
  payload
});

export const useVoucherHandle = payload => ({
  type: VOUCHER.USE_VOUCHER.HANDLER,
  payload
});

export const useVoucherSuccess = payload => ({
  type: VOUCHER.USE_VOUCHER.SUCCESS,
  payload
});

export const useVoucherFailure = payload => ({
  type: VOUCHER.USE_VOUCHER.FAILURE,
  payload
});

export const getDataBySuggestingHandle = payload => ({
  type: VOUCHER.GET_DATA_BY_SUGGEST.HANDLER,
  payload
});

export const getDataBySuggestingSuccess = payload => ({
  type: VOUCHER.GET_DATA_BY_SUGGEST.SUCCESS,
  payload
});

export const getDataBySuggestingFailure = payload => ({
  type: VOUCHER.GET_DATA_BY_SUGGEST.FAILURE,
  payload
});

export const searchVoucherHandle = payload => ({
  type: VOUCHER.SEARCH_VOUCHERS.HANDLER,
  payload
});

export const searchVoucherSuccess = payload => ({
  type: VOUCHER.SEARCH_VOUCHERS.SUCCESS,
  payload
});

export const searchVoucherFailure = payload => ({
  type: VOUCHER.SEARCH_VOUCHERS.FAILURE,
  payload
});

export const searchVoucherClear = payload => ({
  type: VOUCHER.SEARCH_VOUCHERS.CLEAR,
  payload
});

export const searchVoucherStoreHistory = payload => ({
  type: VOUCHER.SEARCH_VOUCHERS.STORE,
  payload
});

export const searchVoucherRemoveHistory = payload => ({
  type: VOUCHER.SEARCH_VOUCHERS.REMOVE,
  payload
});

export const getVoucherDetailHandle = payload => ({
  type: VOUCHER.GET_VOUCHER_DETAIL.HANDLER,
  payload
});

export const getVoucherDetailSuccess = payload => ({
  type: VOUCHER.GET_VOUCHER_DETAIL.SUCCESS,
  payload
});

export const getVoucherDetailFailure = payload => ({
  type: VOUCHER.GET_VOUCHER_DETAIL.FAILURE,
  payload
});

export const getVoucherTypeHandle = payload => ({
  type: VOUCHER.GET_VOUCHER_TYPE.HANDLER,
  payload
});

export const getVoucherTypeSuccess = payload => ({
  type: VOUCHER.GET_VOUCHER_TYPE.SUCCESS,
  payload
});

export const getVoucherTypeFailure = payload => ({
  type: VOUCHER.GET_VOUCHER_TYPE.FAILURE,
  payload
});

export const getRedeemedVoucherDetailHandle = payload => ({
  type: VOUCHER.GET_REDEEMED_VOUCHER_DETAIL.HANDLER,
  payload
});

export const getRedeemedVoucherDetailSuccess = payload => ({
  type: VOUCHER.GET_REDEEMED_VOUCHER_DETAIL.SUCCESS,
  payload
});

export const getRedeemedVoucherDetailFailure = payload => ({
  type: VOUCHER.GET_REDEEMED_VOUCHER_DETAIL.FAILURE,
  payload
});

export const getWishlistByMemberHandle = payload => ({
  type: VOUCHER.GET_WISHLIST_BY_MEMBER.HANDLER,
  payload
});

export const getWishlistByMemberSuccess = payload => ({
  type: VOUCHER.GET_WISHLIST_BY_MEMBER.SUCCESS,
  payload
});

export const getWishlistByMemberFailure = payload => ({
  type: VOUCHER.GET_WISHLIST_BY_MEMBER.FAILURE,
  payload
});

export const updateWishlistHandle = payload => ({
  type: VOUCHER.UPDATE_WISHLIST.HANDLER,
  payload
});

export const updateWishlistSuccess = payload => ({
  type: VOUCHER.UPDATE_WISHLIST.SUCCESS,
  payload
});

export const updateWishlistFailure = payload => ({
  type: VOUCHER.UPDATE_WISHLIST.FAILURE,
  payload
});
