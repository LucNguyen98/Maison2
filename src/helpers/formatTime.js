import moment from 'moment';
import I18n from 'src/i18n';
import * as RNLocalize from 'react-native-localize';

export const formatDate = date => {
  const locales = RNLocalize.getLocales();

  let lang = '';
  if (Array.isArray(locales)) {
    lang = locales[0].languageCode;
    if (lang === 'vi') {
      moment.locale('vi', {
        weekdays: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
      });
    } else {
      moment.locale('en', {
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      });
    }
  }

  let viDate = moment(date).format('dddd, DD/MM/YYYY');
  return viDate;
};

export const formatReadingTime = time => {
  let readingTime;
  let temp = Math.floor(time / 60);
  readingTime = time > 60 ? temp : time;
  return `${readingTime} ${time > 60 ? I18n.t('news.minute') : I18n.t('news.seconds')}`;
};

export const formatDateEvent = date => {
  let newDate = moment(date).format('DD/MM/YYYY');
  return newDate;
};

export const dateToNow = date => {
  var date1 = new Date();
  var date2 = new Date(date);
  var Difference_In_Time = date2.getTime() - date1.getTime();
  if (Difference_In_Time <= 0) {
    return false;
  }
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const locales = RNLocalize.getLocales();

  let lang = '';
  if (Array.isArray(locales)) {
    lang = locales[0].languageCode;
    if (lang === 'vi') {
      return `Còn ${Math.ceil(Difference_In_Days)} ngày`;
    } else {
      return `${Math.ceil(Difference_In_Days)} days left`;
    }
  }
};

export const expiredDateToNow = date => {
  var date1 = new Date();
  var date2 = new Date(date);
  var Difference_In_Time = date2.getTime() - date1.getTime();
  if (Difference_In_Time <= 0) {
    return false;
  }
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const locales = RNLocalize.getLocales();

  let lang = '';
  if (Array.isArray(locales)) {
    lang = locales[0].languageCode;
    if (lang === 'vi') {
      return `${Math.ceil(Difference_In_Days)} ngày`;
    } else {
      return `${Math.ceil(Difference_In_Days)} days`;
    }
  }
};

export const dateMoment = date => {
  var date1 = new Date();
  var date2 = new Date(date);
  var Difference_In_Time = Math.abs(date2.getTime() - date1.getTime());
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Math.ceil(Difference_In_Days);
};

export const minutesToNow = date => {
  var date1 = new Date();
  var date2 = new Date(date);
  var diff = date1.getTime() - date2.getTime();
  return diff / 60000;
};

export const compareDate = (fDate, tDate) => {
  if (!fDate || !tDate) return false;
  const newFromDate = moment(fDate).format('YYYY-MM-DD');
  const newToDate = moment(tDate).format('YYYY-MM-DD');

  return moment(newFromDate).isSame(newToDate);
};

export const isValidDate = (date, format) => {
  format = format ? format : 'DD/MM/YYYY';
  console.log('isValidDate', moment(date, format));
  return moment(date, format).isValid();
};

export const formatDateFromUtc = (date, format) => {
  return moment(date).format(format);
};

export const formatDOB = dateUTC => {
  if (!dateUTC) {
    return null;
  }
  let newDate = new Date(dateUTC);

  const offsetInHours = newDate.getTimezoneOffset() / 60;
  newDate = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    newDate.getDate(),
    newDate.getHours() - offsetInHours,
    newDate.getMinutes(),
    newDate.getSeconds(),
    newDate.getMilliseconds()
  );

  let d = newDate.getUTCDate();
  let m = newDate.getUTCMonth() + 1;
  let y = newDate.getUTCFullYear();
  d = d < 10 ? '0' + d : d;
  m = m < 10 ? '0' + m : m;
  return `${d}/${m}/${y}`;
};

export const compareDateTime = (dateTimeA, dateTimeB) => {
  var momentA = moment(dateTimeA).format('YYYY-MM-DD HH:mm:ss');
  var momentB = moment(dateTimeB).format('YYYY-MM-DD HH:mm:ss');
  if (momentA > momentB) {
    console.log('momentA', momentA, momentB);
    return 1;
  } else if (momentA < momentB) {
    console.log('momentB', momentB);
    return -1;
  } else return 0;
};

export const remainDate = (years, months, days, hours, minutes) => {
  return years != 0
    ? months != 0
      ? `${years} ${I18n.t('time.years')} ${months} ${I18n.t('time.months')}`
      : days != 0
      ? `${years} ${I18n.t('time.years')} ${days} ${I18n.t('time.days')}`
      : hours != 0
      ? `${years} ${I18n.t('time.years')} ${hours} ${I18n.t('time.hours')}`
      : minutes != 0
      ? `${years} ${I18n.t('time.years')} ${minutes} ${I18n.t('time.minutes')}`
      : `${years} ${I18n.t('time.years')}`
    : months != 0
    ? days != 0
      ? `${months} ${I18n.t('time.months')} ${days} ${I18n.t('time.days')}`
      : hours != 0
      ? `${months} ${I18n.t('time.months')} ${hours} ${I18n.t('time.hours')}`
      : minutes != 0
      ? `${months} ${I18n.t('time.months')} ${minutes} ${I18n.t('time.minutes')}`
      : `${months} ${I18n.t('time.months')}`
    : days != 0
    ? hours != 0
      ? `${days} ${I18n.t('time.days')} ${hours} ${I18n.t('time.hours')}`
      : minutes != 0
      ? `${days} ${I18n.t('time.days')} ${minutes} ${I18n.t('time.minutes')}`
      : `${days} ${I18n.t('time.days')}`
    : hours != 0
    ? minutes != 0
      ? `${hours} ${I18n.t('time.hours')} ${minutes} ${I18n.t('time.minutes')}`
      : `${hours} ${I18n.t('time.hours')}`
    : minutes != 0
    ? `${minutes} ${I18n.t('time.minutes')}`
    : '';
};

export const formatHourEvent = date => {
  let hour = moment(date).hour();
  let minute = moment(date).minute();

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;

  return `${hour}:${minute}`;
};

export const formatDateHistory = date => {
  const locales = RNLocalize.getLocales();

  let lang = '';
  if (Array.isArray(locales)) {
    lang = locales[0].languageCode;
    if (lang === 'vi') {
      moment.locale('vi', {
        weekdays: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
      });
    } else {
      moment.locale('en', {
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      });
    }
  }

  let newDate = moment(date).format('DD/MM/YYYY');
  let viDate = moment(date).format('dddd, DD/MM/YYYY');
  let current = new Date();
  let isCurrent = newDate == moment(current).format('DD/MM/YYYY');
  const dayBefore = moment(current.setDate(current.getDate() - 1)).format('DD/MM/YYYY');

  return isCurrent
    ? I18n.t('pointHistory.today')
    : newDate == dayBefore
    ? I18n.t('pointHistory.yesterday')
    : viDate;
};

export const isAfterSameDate = date => {
  const current = new Date();
  if (!date) {
    return false;
  }

  const isSame = moment(current).isSame(date);
  const isAfter = moment(current).isAfter(date);
  return isSame || isAfter;
};

export const isAfterDate = date => {
  const current = new Date();
  if (!date) {
    return false;
  }

  const isAfter = moment(current).isAfter(date);
  return isAfter;
};

export const formatOperationTime = data => {
  let operationHours = '';
  if (data) {
    const current = moment().day();
    const operationTime = JSON.parse(data);

    switch (current) {
      case 0:
        operationHours = `${operationTime.sunday.fromTime} - ${operationTime.sunday.toTime}`;
        break;
      case 1:
        operationHours = `${operationTime.monday.fromTime} - ${operationTime.monday.toTime}`;
        break;
      case 2:
        operationHours = `${operationTime.tuesday.fromTime} - ${operationTime.tuesday.toTime}`;
        break;
      case 3:
        operationHours = `${operationTime.wednesday.fromTime} - ${operationTime.wednesday.toTime}`;
        break;
      case 4:
        operationHours = `${operationTime.thursday.fromTime} - ${operationTime.thursday.toTime}`;
        break;
      case 5:
        operationHours = `${operationTime.friday.fromTime} - ${operationTime.friday.toTime}`;
        break;
      case 6:
        operationHours = `${operationTime.saturday.fromTime} - ${operationTime.saturday.toTime}`;
        break;
      default:
        operationHours = '';
        break;
    }
  }
  return operationHours;
};
