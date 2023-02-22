import AnalyticsService from './AnalyticsService';
import analytics from '@react-native-firebase/analytics';

export default class FirebaseAnalyticsService extends AnalyticsService {
  instance = null;

  static getInstance() {
    if (this.instance == null) {
      this.instance = new FirebaseAnalyticsService();
    }
    return this.instance;
  }

  //   static instance = FirebaseAnalyticsService.instance || new FirebaseAnalyticsService();

  async clearUser() {
    await analytics().setUserId(null);
  }

  async logEvent(key, params) {
    await analytics().logEvent(key, params);
  }

  async setUserId(params) {
    await analytics().setUserId(params);
  }

  async logPage(params) {
    await this.logEvent('page_event', params);
  }

  async logAction(params) {
    console.log('params', params);
    await this.logEvent('user_action', params);
  }

  async logPageDuration(params) {
    await this.logEvent('page_time_duration', params);
  }

  async logTapGesture(params) {
    await this.logEvent('gesture_tap', params);
  }

  async logPanGesture(params) {
    let param = { ...params };
    await this.logEvent('gesture_pan', param);
  }

  async logSwipeGesture(params) {}
}
