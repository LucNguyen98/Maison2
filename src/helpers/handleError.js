import moment from 'moment';
import { RESPONSE_CODE } from 'constants/errors';
import I18n from 'src/i18n';

export function merge2Array(array1, array2, key) {
  const array12 = [...array1, ...array2];
  const data = array12.reduce((result, item) => {
    const isHave = result.some(e => e[key] === item[key]);
    if (isHave) {
      return result.map(e => {
        if (e[key] === item[key]) {
          return { ...e, ...item };
        }
        return e;
      });
    }
    // result.push(item);

    return [...result, item];
  }, []);
  return data;
}

export function convertTimeString(timeString) {
  if (timeString) {
    return moment(new Date(timeString)).format('HH:mm, DD/MM/YYYY');
  }
  return moment().format('HH:mm, DD/MM/YYYY');
}

function convertDataError(error, msg) {
  let { code, message, data, status } = error;
  switch (status) {
    case RESPONSE_CODE.NOT_FOUND:
      code = RESPONSE_CODE.NOT_FOUND;
      break;
  }
  let result = RESPONSE_CODE[code];
  if (result) {
    return { code: data && data.code, message: msg ? msg + result : result, status };
  }
  if (message && message.search('Cannot read property') >= 0) {
    return {
      code: RESPONSE_CODE.UNDEFINED,
      message: I18n.t('errMessage.query_error'),
      status
    };
  }
  if (code === 'auth/network-request-failed') {
    return {
      code: RESPONSE_CODE.NOT_FOUND,
      message: I18n.t('errMessage.network_error'),
      status
    };
  }
  if (
    (message && message.search('Network Error') >= 0) ||
    (msg && msg.search('Network Error') >= 0)
  ) {
    return {
      code: RESPONSE_CODE.NOT_FOUND,
      message: I18n.t('errMessage.network_error'),
      status
    };
  }
  return {
    code: (data && data.code) || code,
    message: (data && data.message) || message || I18n.t('errMessage.error_tryAgain'),
    status
  };
}

export function handleErrorMessage(err, msg) {
  const { response } = err;
  if (response) {
    return convertDataError(response, msg);
  } else {
    return convertDataError(err, msg);
  }
}
