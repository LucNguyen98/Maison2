import { CHALLENGE } from 'actionsType';

const initialState = {
  challenges: [],
  myChallenges: [],
  isLoadingJoin: false,
  joinChallengeError: {},
  challengeDetail: {},
  challengeDetailError: ''
};

const challenges = (state = initialState, action) => {
  switch (action.type) {
    /**
     * ===== Get list by member code actions =====
     */
    case CHALLENGE.GET_LIST_BY_MEMBER_CODE.SUCCESS: {
      const { filterIdx, totalCount, items, isLoadMore } = action.payload;
      let newList = [];

      // if doesn't exist in array
      if (!state.challenges.some(el => el.filterIdx === filterIdx)) {
        const challengeObj = Object.assign({
          filterIdx: filterIdx,
          totalCount: totalCount,
          item: items
        });

        newList = [...state.challenges, challengeObj];
      } else {
        newList = state.challenges.map(el => {
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
        challenges: newList
      };
    }
    case CHALLENGE.GET_LIST_BY_MEMBER_CODE.FAILURE: {
      return {
        ...state
      };
    }

    case CHALLENGE.GET_LIST_CHALLENGE_HOT.FAILURE: {
      return {
        ...state
      };
    }
    /**
     * ===== Join challenge actions =====
     */

    case CHALLENGE.JOIN_CHALLENGE.HANDLER: {
      return {
        ...state,
        isLoadingJoin: true,
        joinChallengeError: {}
      };
    }

    case CHALLENGE.JOIN_CHALLENGE.SUCCESS: {
      const { filterIdx, id, data } = action.payload;

      const newList = state.challenges.map(el => {
        if (el.filterIdx === filterIdx) {
          const newObj = el.item.map(quest =>
            quest.id == id ? { ...quest, state: data.state } : quest
          );
          return { ...el, item: newObj };
        }
        return el;
      });

      return {
        ...state,
        challenges: newList,
        isLoadingJoin: false,
        joinChallengeError: {}
      };
    }
    case CHALLENGE.JOIN_CHALLENGE.FAILURE: {
      return {
        ...state,
        isLoadingJoin: false,
        joinChallengeError: action.payload
      };
    }

    /**
     * ===== Get my challenge actions =====
     *
     */
    case CHALLENGE.GET_MY_CHALLENGE.HANDLER: {
      return {
        ...state
      };
    }

    case CHALLENGE.GET_MY_CHALLENGE.SUCCESS: {
      const { filterIdx, totalCount, items, isLoadMore } = action.payload;
      let newList = [];

      // if doesn't exist in array
      if (!state.myChallenges.some(el => el.filterIdx === filterIdx)) {
        const myChallengeObj = Object.assign({
          filterIdx: filterIdx,
          totalCount: totalCount,
          item: items
        });

        newList = [...state.myChallenges, myChallengeObj];
      } else {
        newList = state.myChallenges.map(el => {
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
        myChallenges: newList
      };
    }
    case CHALLENGE.GET_MY_CHALLENGE.FAILURE: {
      return {
        ...state
      };
    }

    case CHALLENGE.CLEAR_CHALLENGES_LIST.CLEAR: {
      return {
        ...state,
        challenges: [],
        myChallenges: []
      };
    }

    case CHALLENGE.GET_CHALLENGE_DETAIL.HANDLER: {
      return {
        ...state
      };
    }

    case CHALLENGE.GET_CHALLENGE_DETAIL.SUCCESS: {
      return {
        ...state,
        challengeDetail: action.payload.item
      };
    }

    case CHALLENGE.GET_CHALLENGE_DETAIL.FAILURE: {
      return {
        ...state,
        challengeDetailError: action.payload
      };
    }

    case CHALLENGE.RESET_ERROR.HANDLER: {
      return {
        ...state,
        challengeDetailError: {},
        joinChallengeError: {}
      };
    }

    default:
      return state;
  }
};

export default challenges;
