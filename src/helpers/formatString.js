import I18n from 'src/i18n';
import * as RNLocalize from 'react-native-localize';

export const formatReason = (reason, ActionCode) => {
  let reasonName = '';
  if (reason === 'ActionRule') {
    switch (ActionCode) {
      case 'FirstLogin':
        reasonName = I18n.t('pointHistory.firstLogin');
        break;
      case 'UpdateInfo':
        reasonName = I18n.t('pointHistory.update_info');
        break;
      case 'ReadNews':
        reasonName = I18n.t('pointHistory.read_news');
        break;
      case 'DailyLogin':
        reasonName = I18n.t('pointHistory.daily_login');
        break;
      case 'CheckinEvent':
        reasonName = I18n.t('pointHistory.check_in_event');
        break;
      case 'SimpleSurvey':
        reasonName = I18n.t('pointHistory.completed_survey');
        break;
      case 'ComplexSurvey':
        reasonName = I18n.t('pointHistory.completed_survey');
        break;
      default:
        reasonName = ActionCode;
    }
  } else {
    switch (reason) {
      case 'Invoice':
        reasonName = I18n.t('pointHistory.shopping');
        break;
      case 'Birthday':
        reasonName = I18n.t('pointHistory.birthday');
        break;
      case 'Custom':
        reasonName = I18n.t('pointHistory.special_challenge');
        break;
      case 'ClaimQuest':
        reasonName = I18n.t('pointHistory.completed_challenge');
        break;
      case 'ClaimMission':
        reasonName = I18n.t('pointHistory.completed_mission');
        break;
      case 'Referee':
        reasonName = I18n.t('pointHistory.referer');
        break;
      case 'Referrer':
        reasonName = I18n.t('pointHistory.referer');
        break;
      case 'AdjustPlus':
        reasonName = I18n.t('pointHistory.plus_point');
        break;
      case 'UseCoin':
        reasonName = I18n.t('pointHistory.shopping');
        break;
      case 'GiftRedeem':
        reasonName = I18n.t('pointHistory.redeem');
        break;
      case 'ExpireCoin':
        reasonName = I18n.t('pointHistory.expire_coin');
        break;
      case 'AdjustMinus':
        reasonName = I18n.t('pointHistory.minus_point');
        break;
      case 'ReturnFull':
        reasonName = I18n.t('pointHistory.return_order');
        break;
      case 'MLMPurchaseOrder':
        reasonName = I18n.t('pointHistory.purchaseOrder');
        break;
      case 'ReturnPartial':
        reasonName = I18n.t('pointHistory.return_order');
        break;
      default:
        reasonName = reason;
    }
  }
  return reasonName;
};

export const quantityVoucher = quantity => {
  let lang = '';
  const locales = RNLocalize.getLocales();

  if (quantity) {
    if (Array.isArray(locales)) {
      lang = locales[0].languageCode;
      if (lang === 'vi') {
        return `Còn ${quantity} lượt`;
      } else {
        return `${quantity} vouchers left`;
      }
    }
  }
  return 'Còn 0 lượt';
};
