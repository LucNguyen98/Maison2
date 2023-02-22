import { EVENT } from 'actionsType';

const initialState = {
  events: [],
  myEvents: [],
  listCalendarActive: [],
  listEventLocal: [],
  eventDetail: {},
  errorDetail: ''
};

const events = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get all actions =====
     */
    case EVENT.GET_ALL_EVENT.SUCCESS: {
      const { filterIdx, totalCount, items, isLoadMore } = action.payload;
      let newList = [];

      // if doesn't exist in array
      if (!state.events.some(el => el.filterIdx === filterIdx)) {
        const eventObj = Object.assign({
          filterIdx: filterIdx,
          totalCount: totalCount,
          item: items
        });

        newList = [...state.events, eventObj];
      } else {
        newList = state.events.map(el => {
          if (el.filterIdx === filterIdx) {
            if (isLoadMore) {
              return { ...el, totalCount: totalCount, item: el.item.concat(items) };
            } else {
              return { ...el, totalCount: totalCount, item: items };
            }
          }
          return el;
        });
      }

      return {
        ...state,
        events: newList
      };
    }
    case EVENT.GET_ALL_EVENT.FAILURE: {
      return {
        ...state
      };
    }
    /**
     * ===== Get all article actions =====
     */
    case EVENT.SUBMIT_EVENT_RESPONSE.SUCCESS: {
      return {
        ...state
      };
    }
    case EVENT.SUBMIT_EVENT_RESPONSE.FAILURE: {
      return {
        ...state
      };
    }
    /**
     * ===== List calendar actions =====
     */
    case EVENT.STORE_LIST_CALENDAR.HANDLER: {
      return {
        ...state,
        listCalendarActive: action.payload.article.attendantCode
          ? [...state.listCalendarActive, action.payload]
          : state.listCalendarActive,

        listEventLocal: [
          ...state.listEventLocal,
          {
            memberCode: action.payload.article.memberCode,
            id: action.payload.article.id,
            code: action.payload.article.code
          }
        ]
      };
    }

    case EVENT.REMOVE_EVENT_CALENDAR.HANDLER: {
      return {
        ...state,
        listCalendarActive: state.listCalendarActive.filter(
          item => item.article.id !== action.payload.item.id
        ),
        listEventLocal: state.listEventLocal.filter(
          el => el.id !== action.payload.item.id || el.memberCode !== action.payload.memberCode
        )
      };
    }

    /**
     * ===== My Event actions =====
     */
    case EVENT.GET_ALL_MY_EVENT.SUCCESS: {
      return {
        ...state,
        listCalendarActive: action.payload.items
      };
    }
    case EVENT.GET_ALL_MY_EVENT.FAILURE: {
      return {
        ...state
      };
    }

    /**
     * ===== My Event actions =====
     */
    case EVENT.GET_MY_EVENT_FILTER.HANDLER: {
      return {
        ...state
      };
    }

    case EVENT.GET_MY_EVENT_FILTER.SUCCESS: {
      const { filterIdx, totalCount, items, isLoadMore } = action.payload;
      let newList = [];

      // if doesn't exist in array
      if (!state.myEvents.some(el => el.filterIdx === filterIdx)) {
        const eventObj = Object.assign({
          filterIdx: filterIdx,
          totalCount: totalCount,
          item: items
        });

        newList = [...state.myEvents, eventObj];
      } else {
        newList = state.myEvents.map(el => {
          if (el.filterIdx === filterIdx) {
            if (isLoadMore) {
              return { ...el, totalCount: totalCount, item: el.item.concat(items) };
            } else {
              return { ...el, totalCount: totalCount, item: items };
            }
          }
          return el;
        });
      }
      return {
        ...state,
        myEvents: newList
      };
    }

    case EVENT.GET_MY_EVENT_FILTER.FAILURE: {
      return {
        ...state
      };
    }

    case EVENT.CLEAR_EVENT_CALENDAR.CLEAR: {
      return {
        ...state,
        listCalendarActive: [],
        events: [],
        myEvents: []
      };
    }

    case EVENT.GET_EVENT_DETAIL.HANDLER: {
      return {
        ...state,
        eventDetail: {}
      };
    }

    case EVENT.GET_EVENT_DETAIL.SUCCESS: {
      return {
        ...state,
        eventDetail: action.payload
      };
    }

    case EVENT.GET_EVENT_DETAIL.FAILURE: {
      return {
        ...state,
        errorDetail: action.payload
      };
    }

    default:
      return state;
  }
};

export default events;
