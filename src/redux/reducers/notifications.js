import { NOTIFICATION } from 'actionsType';

const initialState = {
  generalNotification: [],
  privateNotification: [],
  received: false,
  totalNotifications: 0,
  totalUnread: 0,
  totalGeneralNotifications: 0,
  totalGeneralUnread: 0,
  totalPrivateNotifications: 0,
  totalPrivateUnread: 0,
  deleteSuccess: false,
  settingNotification: {
    pushNotification: true,
    smsNotification: true,
    giftNotification: true,
    eventsNotification: true,
    challengeNotification: true,
    versionNotification: true
  }
};

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION.GET_ALL_NOTIFICATION.SUCCESS: {
      const generalNotification = action.payload.result.items.items.filter(
        el =>
          el.notification.action === 'news.publish' ||
          el.notification.action === 'gift.publish' ||
          el.notification.action === 'events.publish' ||
          el.notification.action === 'version.publish' ||
          el.notification.action === 'store.publish'
      );

      const privateNotification = action.payload.result.items.items.filter(
        el =>
          el.notification.action !== 'news.publish' &&
          el.notification.action !== 'gift.publish' &&
          el.notification.action !== 'events.publish' &&
          el.notification.action !== 'version.publish' &&
          el.notification.action !== 'store.publish'
      );

      return {
        ...state,
        generalNotification: action.payload.isRefresh
          ? generalNotification
          : [...state.generalNotification, ...generalNotification],

        privateNotification: action.payload.isRefresh
          ? privateNotification
          : [...state.privateNotification, ...privateNotification],

        totalNotifications: action.payload.result.items.totalCount,

        totalUnread: action.payload.result.totalUnreadCount,

        received: action.payload.received
      };
    }

    case NOTIFICATION.GET_GENERAL_NOTIFICATION.SUCCESS: {
      console.log('general', action.payload);
      return {
        ...state,
        generalNotification: action.payload.isRefresh
          ? action.payload.result.items.items
          : [...state.generalNotification, ...action.payload.result.items.items],

        totalGeneralNotifications: action.payload.result.items.totalCount,

        totalGeneralUnread: action.payload.result.totalUnreadCount,

        received: action.payload.received
      };
    }

    case NOTIFICATION.GET_PRIVATE_NOTIFICATION.SUCCESS: {
      console.log('private', action.payload);
      return {
        ...state,
        privateNotification: action.payload.isRefresh
          ? action.payload.result.items.items
          : [...state.privateNotification, ...action.payload.result.items.items],

        totalPrivateNotifications: action.payload.result.items.totalCount,

        totalPrivateUnread: action.payload.result.totalUnreadCount,

        received: action.payload.received
      };
    }

    case NOTIFICATION.GET_ALL_NOTIFICATION.FAILURE: {
      return {
        ...state
      };
    }

    case NOTIFICATION.DELETE_NOTIFICATION.SUCCESS: {
      return {
        ...state,
        deleteSuccess: true,
        generalNotification: state.generalNotification.filter(
          item => item.notification.id !== action.payload.notification.id
        ),
        privateNotification: state.privateNotification.filter(
          item => item.notification.id !== action.payload.notification.id
        ),
        totalUnread: !action.payload.notification.status
          ? state.totalUnread - 1
          : state.totalUnread,
        totalNotifications: state.totalNotifications - 1
      };
    }

    case NOTIFICATION.READ_NOTIFICATION.SUCCESS: {
      console.log('action.payload.notification', action.payload.notification);

      return {
        ...state,
        generalNotification: state.generalNotification.map(item => {
          return item.notification.idNotification === action.payload.notification.idNotification
            ? Object.assign({
                notification: { ...item.notification, status: true }
              })
            : Object.assign({
                notification: item.notification
              });
        }),
        privateNotification: state.privateNotification.map(item =>
          item.notification.idNotification === action.payload.notification.idNotification
            ? Object.assign({
                notification: { ...item.notification, status: true }
              })
            : Object.assign({
                notification: item.notification
              })
        ),
        totalGeneralUnread:
          !action.payload.notification.status &&
          (action.payload.notification.action === 'news.publish' ||
            action.payload.notification.action === 'gift.publish' ||
            action.payload.notification.action === 'events.publish' ||
            action.payload.notification.action === 'version.publish' ||
            action.payload.notification.action === 'store.publish')
            ? state.totalGeneralUnread - 1
            : state.totalGeneralUnread,

        totalPrivateUnread:
          !action.payload.notification.status &&
          action.payload.notification.action !== 'news.publish' &&
          action.payload.notification.action !== 'gift.publish' &&
          action.payload.notification.action !== 'events.publish' &&
          action.payload.notification.action !== 'version.publish' &&
          action.payload.notification.action !== 'store.publish'
            ? state.totalPrivateUnread - 1
            : state.totalPrivateUnread
      };
    }

    case NOTIFICATION.READ_NOTIFICATION.FAILURE: {
      return {
        ...state
      };
    }

    case NOTIFICATION.GET_NOTIFICATION_SETTING.SUCCESS: {
      const { notificationSetting } = action.payload;
      console.log('notificationSetting', notificationSetting);
      const settingResult = {
        pushNotification: notificationSetting.PushNotification,
        smsNotification: notificationSetting.SmsNotification,
        giftNotification: notificationSetting.GiftNotification,
        eventsNotification: notificationSetting.EventsNotification,
        challengeNotification: notificationSetting.ChallengeNotification,
        versionNotification: notificationSetting.VersionNotification
      };
      return {
        ...state,
        settingNotification: settingResult
      };
    }

    case NOTIFICATION.UPDATE_NOTIFICATION_SETTING.HANDLER: {
      return {
        ...state
      };
    }

    case NOTIFICATION.UPDATE_NOTIFICATION_SETTING.STORE: {
      return {
        ...state,
        settingNotification: action.payload
      };
    }

    case NOTIFICATION.REMOVE_ALL_NOTIFICATION.CLEAR: {
      return {
        ...state,
        generalNotification: [],
        privateNotification: [],
        totalNotifications: 0,
        totalUnread: 0,
        deleteSuccess: false
      };
    }

    default:
      return state;
  }
};

export default notifications;
