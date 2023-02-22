import { combineReducers } from 'redux';
import auth from './auth';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import loading from './loading';
import news from './news';
import vouchers from './vouchers';
import events from './events';
import store from './store';
import survey from './survey';
import profile from './profile';
import challenges from './challenges';
import faq from './faq';
import rank from './rank';
import transaction from './transactions';
import system from './system';
import notification from './notifications';
import security from './security';
import home from './home';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['isFirstDown', 'isGuest', 'usersInfo', 'loginList'],
  version: 1.0
};

const newsPersistConfig = {
  key: 'new',
  storage: AsyncStorage,
  whitelist: ['AllArticle'],
  version: 1.0
};

const vouchersPersistConfig = {
  key: 'voucher',
  storage: AsyncStorage,
  whitelist: [
    'vouchers',
    'voucherHome',
    'voucherGroup',
    'brands',
    'mostSearching',
    'searchHistory',
    'voucherTypes'
  ],
  version: 1.0
};

const eventPersistConfig = {
  key: 'event',
  storage: AsyncStorage,
  whitelist: ['events', 'listCalendarActive', 'myEvents', 'listEventLocal'],
  version: 1.0
};

const storePersistConfig = {
  key: 'store',
  storage: AsyncStorage,
  whitelist: ['stores', 'brand'],
  version: 1.0
};

const profilePersistConfig = {
  key: 'profile',
  storage: AsyncStorage,
  whitelist: ['profile', 'changePhoneList'],
  version: 1.0
};

const challengePersistConfig = {
  key: 'challenge',
  storage: AsyncStorage,
  whitelist: ['myChallenges', 'challenges'],
  version: 1.0
};

const faqPersistConfig = {
  key: 'faq',
  storage: AsyncStorage,
  whitelist: ['faqs'],
  version: 1.0
};

const rankPersistConfig = {
  key: 'rank',
  storage: AsyncStorage,
  whitelist: ['rankList'],
  version: 1.0
};

const transactionPersistConfig = {
  key: 'transaction',
  storage: AsyncStorage,
  whitelist: [
    'claimHistory',
    'redeemHistory',
    'orderHistory',
    'totalOrder',
    'totalClaim',
    'totalRedeem'
  ],
  version: 1.0
};

const notificationPersistConfig = {
  key: 'notification',
  storage: AsyncStorage,
  whitelist: ['generalNotification', 'privateNotification', 'settingNotification'],
  version: 1.0
};

const securityPersistConfig = {
  key: 'security',
  storage: AsyncStorage,
  whitelist: ['forgetList'],
  version: 1.0
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  news: persistReducer(newsPersistConfig, news),
  voucher: persistReducer(vouchersPersistConfig, vouchers),
  event: persistReducer(eventPersistConfig, events),
  store: persistReducer(storePersistConfig, store),
  profile: persistReducer(profilePersistConfig, profile),
  challenge: persistReducer(challengePersistConfig, challenges),
  faq: persistReducer(faqPersistConfig, faq),
  rank: persistReducer(rankPersistConfig, rank),
  transaction: persistReducer(transactionPersistConfig, transaction),
  notification: persistReducer(notificationPersistConfig, notification),
  security: persistReducer(securityPersistConfig, security),
  system,
  survey,
  loading,
  home
});

// export default combineReducers({
//   auth,
//   news,
//   voucher: vouchers,
//   event: events,
//   store,
//   profile,
//   challenge: challenges,
//   faq,
//   rank,
//   transaction,
//   notification,
//   system,
//   survey,
//   loading,
//   security
// });
