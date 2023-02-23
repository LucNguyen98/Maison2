import {
  checkExistedHandle,
  getAccessTokenHandle,
  getClearErrorHandle,
  getRefreshTokenHandle,
} from 'actions/auth';
import {AUTH} from '../../../redux/actionsType';
// import {withLoading} from 'components';
// import FirebaseAnalyticsService from 'helpers/FirebaseAnalyticsService';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StatusBar,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {
  getErrorMessageSelector,
  getIsErrorSelector,
  getListUserSelector,
  getPhoneNumberSecondSelector,
  getPhoneNumberSelector,
} from 'selectors/auth';
import {
  ButtonCustom,
  DismissKeyboardView,
  // DismissKeyboardView,
  InputPhoneNumber,
  LogoApp,
  TransitionView,
  withLoading,
} from '../../../components';
import I18n from 'src/i18n';
// import {ActionObject} from 'src/Models';
import {ArrowLeft} from '../../../assets/icons';
import {
  COLOR_DANGER,
  COLOR_DARK,
  COLOR_WHITE,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
} from '../../../constants/colors';
import {
  BORDER_RADIUS,
  DEVICE_WIDTH,
  HEADER_HEIGHT,
  ITEM_SPACE,
  HIT_SLOP,
} from '../../../constants/size';
import {FONT_FAMILY, FONT_SIZE} from '../../../constants/appFonts';
import {scale} from '../../../utils/responsive';
import DeviceInfo from 'react-native-device-info';

const transitionFadeIn = 'fadeIn';
const GUEST_PHONE = '0283936942';
const vnf_regex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/g;

const Login = ({navigation}) => {
  // const analytics =  FirebaseAnalyticsService.getInstance();

  const dispatch = useDispatch();
  const phoneNumberSelector = useSelector(state =>
    getPhoneNumberSelector(state),
  );
  const phoneSecond = useSelector(state => getPhoneNumberSecondSelector(state));
  const messageSelector = useSelector(state => getErrorMessageSelector(state));
  const isErrorSelector = useSelector(state => getIsErrorSelector(state));
  const listUserInfo = useSelector(state => getListUserSelector(state));

  const [phoneNumber, setPhoneNumber] = useState(
    phoneNumberSelector === GUEST_PHONE
      ? phoneSecond
        ? phoneSecond?.slice(3)
        : ''
      : phoneNumberSelector
      ? phoneNumberSelector?.slice(3)
      : '',
  );
  const [message, setMessage] = useState(messageSelector);
  const [isError, setError] = useState(isErrorSelector);

  useEffect(() => {
    setError(isError);
    setMessage(messageSelector);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  const onChangeText = text => {
    isError && dispatch(getClearErrorHandle());
    setPhoneNumber(text);
    setMessage('');
  };

  const loginHandler = async () => {
    Keyboard.dismiss();
    let _phoneNumber =
      phoneNumber.charAt(0) === '0' ? phoneNumber : `0${phoneNumber}`;

    if (!vnf_regex.test(_phoneNumber)) {
      setMessage(I18n.t('errMessage.phone_notMatch'));
      setError(isError);
    } else {
      let phoneNumberNoneZero = phoneNumber.substring(1);
      setMessage('');
      setError(false);
      // let actionObj = new ActionObject(
      //   'LOGIN',
      //   AUTH.GET_OTP.HANDLER,
      //   'LOGIN_CONTAINER',
      // );
      // await analytics.logAction(actionObj);

      const user = listUserInfo.find(
        el => el.phoneNumber === `+84${phoneNumberNoneZero}`,
      );

      if (user?.allowPinCode) {
        dispatch(
          getAccessTokenHandle({
            phoneNumber: `+84${phoneNumberNoneZero}`,
            isExisted: true,
            refreshToken: user.firebaseResponse?.refreshToken,
          }),
        );
      } else {
        dispatch(
          checkExistedHandle({
            phoneNumber: `+84${phoneNumberNoneZero}`,
          }),
        );
      }
    }
  };

  return (
    <DismissKeyboardView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLOR_TEXT_PRIMARY} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          hitSlop={HIT_SLOP}
          style={styles.previous}
          onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>{I18n.t('auth.login')}</Text>
      </View>

      <LogoApp color={COLOR_TEXT_PRIMARY} style={styles.logo} />

      <View style={styles.wrapper}>
        <View>
          <InputPhoneNumber
            title={I18n.t('profile.phone')}
            value={phoneNumber}
            onChange={onChangeText}
            isError={isError}
            errorMessage={message}
          />

          {phoneNumber.length > 0 ? (
            <TransitionView
              animation={transitionFadeIn}
              style={[styles.transitionView]}>
              <ButtonCustom
                title={'Submit'}
                onPress={loginHandler}
                isUppercase
              />
            </TransitionView>
          ) : null}
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.txtRegister}>Don’t have an account yet?</Text>
          <TouchableOpacity
            hitSlop={HIT_SLOP}
            onPress={() => navigation.goBack()}>
            <Text style={styles.btnTxtRegister}>Sign Up here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboardView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: ITEM_SPACE.LARGE,
    marginTop: scale(85),
    justifyContent: 'space-between',
  },
  errorSection: {
    height: scale(33),
  },
  transitionView: {
    marginTop: scale(81),
  },
  statusBar: {
    backgroundColor: '#000000',
  },
  previous: {},
  headerContainer: {
    marginTop:
      Platform.OS === 'ios'
        ? DeviceInfo.hasNotch()
          ? scale(40)
          : scale(32)
        : scale(32),
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(27),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: FONT_SIZE.NORMAL,
    fontFamily: FONT_FAMILY.BOLD,
    marginRight: scale(27),
  },
  logo: {
    marginTop: scale(62),
    alignSelf: 'center',
  },
  registerContainer: {
    alignItems: 'center',
    marginBottom: scale(44),
  },
  txtRegister: {
    textAlign: 'center',
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.REGULAR,
    letterSpacing: 1,
    color: COLOR_TEXT_PRIMARY,
    marginBottom: scale(8),
  },
  btnTxtRegister: {
    textAlign: 'center',
    fontSize: FONT_SIZE.NORMAL,
    fontFamily: FONT_FAMILY.BOLD,
    letterSpacing: 1,
    color: COLOR_TEXT_PRIMARY,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    lineHeight: scale(18),
  },
});

export default withLoading(Login, [
  AUTH.CHECK_EXISTED.HANDLER,
  AUTH.GET_OTP.HANDLER,
]);
