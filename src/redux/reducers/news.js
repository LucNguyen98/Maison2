import { NEWS } from 'actionsType';

const initialState = {
  article: {},
  AllArticle: [],
  errorDetail: ''
};

const news = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get all actions =====
     */

    case NEWS.GET_ARTICLE_DETAIL.HANDLER: {
      return {
        ...state,
        article: {}
      };
    }

    case NEWS.GET_ARTICLE_DETAIL.SUCCESS: {
      return {
        ...state,
        article: action.payload.article
      };
    }

    case NEWS.GET_ARTICLE_DETAIL.FAILURE: {
      return {
        ...state,
        errorDetail: action.payload
      };
    }

    /**
     * ===== Get all article actions =====
     */

    case NEWS.GET_ALL_ARTICLE.SUCCESS: {
      return {
        ...state,
        AllArticle: action.payload.items
      };
    }
    case NEWS.GET_ALL_ARTICLE.FAILURE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default news;
