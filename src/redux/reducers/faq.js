import { FAQ } from 'actionsType';

const initialState = {
  faqs: [],
  faqsFilter: [],
  policy: {},
  totalCount: 0,
  isSubmitSuccess: false,
  isSubmitFailure: false
};

const faq = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get all FAQ actions =====
     */
    case FAQ.GET_ALL_FAQ.HANDLER: {
      return {
        ...state
      };
    }
    case FAQ.GET_ALL_FAQ.SUCCESS: {
      const { typeFilter, data } = action.payload;

      let tempGroup = state.faqs;

      if (!tempGroup) {
        tempGroup = [{ key: typeFilter, data: data.items, totalCount: data.totalCount }];
      } else {
        let isExisted = false;
        tempGroup.forEach(element => {
          if (element.key == typeFilter) {
            element.data = data.items;
            element.totalCount = data.totalCount;
            isExisted = true;
          }
        });
        if (!isExisted) {
          tempGroup = [
            ...tempGroup,
            { key: typeFilter, data: data.items, totalCount: data.totalCount }
          ];
        }
      }

      return {
        ...state,
        faqs: tempGroup
      };
    }
    case FAQ.GET_ALL_FAQ.FAILURE: {
      return {
        ...state
      };
    }

    /**
     * ===== Get all FAQ Filter actions =====
     */
    case FAQ.GET_ALL_FAQ_FILTER.HANDLER: {
      return {
        ...state
      };
    }
    case FAQ.GET_ALL_FAQ_FILTER.SUCCESS: {
      return {
        ...state,
        faqsFilter: action.payload.items
      };
    }
    case FAQ.GET_ALL_FAQ_FILTER.FAILURE: {
      return {
        ...state
      };
    }

    /**
     * ===== Get Policy actions =====
     */
    case FAQ.GET_POLICY.HANDLER: {
      return {
        ...state
      };
    }
    case FAQ.GET_POLICY.SUCCESS: {
      return {
        ...state,
        policy: action.payload.items[0]
      };
    }
    case FAQ.GET_POLICY.FAILURE: {
      return {
        ...state
      };
    }

    /**
     * ===== Submit support request action =====
     */
    case FAQ.SUBMIT_SUPPORT_REQUEST.HANDLER: {
      return {
        ...state
      };
    }
    case FAQ.SUBMIT_SUPPORT_REQUEST.SUCCESS: {
      return {
        ...state,
        isSubmitSuccess: true,
        isSubmitFailure: false
      };
    }
    case FAQ.SUBMIT_SUPPORT_REQUEST.FAILURE: {
      return {
        ...state,
        isSubmitSuccess: false,
        isSubmitFailure: true
      };
    }
    case FAQ.SUBMIT_SUPPORT_REQUEST.CLEAR: {
      return { ...state, isSubmitSuccess: false, isSubmitFailure: false };
    }
    default:
      return state;
  }
};

export default faq;
