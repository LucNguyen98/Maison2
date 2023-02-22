import { NEWS } from 'actionsType';

/**
 * ===== Get all article actions =====
 */
export const getAllArticleHandle = payload => ({
  type: NEWS.GET_ALL_ARTICLE.HANDLER,
  payload
});

export const getAllArticleSuccess = payload => ({
  type: NEWS.GET_ALL_ARTICLE.SUCCESS,
  payload
});

export const getAllArticleFailure = payload => ({
  type: NEWS.GET_ALL_ARTICLE.FAILURE,
  payload
});

/**
 * ===== Get all actions =====
 */
export const getArticleDetailHandle = payload => ({
  type: NEWS.GET_ARTICLE_DETAIL.HANDLER,
  payload
});

export const getArticleDetailSuccess = payload => ({
  type: NEWS.GET_ARTICLE_DETAIL.SUCCESS,
  payload
});

export const getArticleDetailFailure = payload => ({
  type: NEWS.GET_ARTICLE_DETAIL.FAILURE,
  payload
});
