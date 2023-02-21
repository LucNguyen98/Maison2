/* eslint-disable react-hooks/exhaustive-deps */
import {firebase} from '@react-native-firebase/dynamic-links';
import {
  getConfirmOTPHandle,
  getConfirmOTPSuccess,
  getMemberViewPointSuccess,
} from 'actions/auth';
import {getShowAlertError} from 'actions/system';
import {AUTH} from 'actionsType';
import {
  onboarding1,
  onboarding1_small,
  onboarding2,
  onboarding2_small,
  onboarding3,
  onboarding3_small,
} from 'assets/images';
import CrashlyticsService from 'helpers/CrashlyticsService';
import FirebaseAnalyticsService from 'helpers/FirebaseAnalyticsService';
import {handleErrorMessage} from 'helpers/handleError';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getIsFirstDown} from 'selectors/auth';
import I18n from 'src/i18n';
import {ActionObject} from 'src/Models';
import {TransitionView, ButtonCustom, withLoading} from '../../components';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import {
  DEVICE_WIDTH,
  HIT_SLOP,
  BORDER_RADIUS,
  ITEM_SPACE,
  DEVICE_HEIGHT,
} from '../../constants/size';
import {
  COLOR_TEXT_PRIMARY,
  COLOR_WHITE,
  COLOR_DARK,
} from '../../constants/colors';
import {FONT_SIZE, FONT_FAMILY} from '../../constants/appFonts';
import {scale} from '../../utils/responsive';

const onboardingImages = [
  {id: '0', image: DEVICE_HEIGHT > 667 ? onboarding1 : onboarding1_small},
  {id: '1', image: DEVICE_HEIGHT > 667 ? onboarding2 : onboarding2_small},
  {id: '2', image: DEVICE_HEIGHT > 667 ? onboarding3 : onboarding3_small},
];

const Onboarding = ({navigation}) => {
  const dispatch = useDispatch();
  const isFirstDown = useSelector(state => getIsFirstDown(state));

  const analytics = FirebaseAnalyticsService.getInstance();
  const crashlytics = CrashlyticsService.getInstance();

  let scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, Dimensions.get('window').width);

  const [title, setTitle] = useState(I18n.t('auth.register'));
  const [loading, setLoading] = useState(false);
  const [isFirstMount, setFirstMount] = useState(false);

  useEffect(() => {
    if (!isFirstMount) {
      setFirstMount(true);
      navigation.navigate('LoginScreen');
    }
  }, []);

  useEffect(() => {
    if (!isFirstDown) {
      setTitle(I18n.t('auth.login'));
    }
  }, [isFirstDown]);

  const onPressWhiteButton = () => {
    crashlytics.logCrash('WHITE_BUTTON');
    try {
      let actionObj = new ActionObject(
        'ONBOARDING',
        'WHITE_BUTTON',
        'ONBOARDING',
      );
      analytics.logAction(actionObj);
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
      crashlytics.errorRecord(error);
    }
  };

  const skipHandler = () => {
    crashlytics.logCrash('SKIP_BUTTON');
    setLoading(true);
    firebase
      .auth()
      .signInAnonymously()
      .then(async () => {
        const idTokenResult = await firebase
          .auth()
          .currentUser.getIdTokenResult(true);
        dispatch(
          getConfirmOTPSuccess({
            firebaseResponse: {
              token: idTokenResult.token,
              expirationTime: idTokenResult.expirationTime,
            },
            memberCode: 'Maison_prod20210519001',
            phoneNumber: '0283936942',
            type: 'login',
          }),
        );

        dispatch(
          getMemberViewPointSuccess({
            memberLoyaltyInfo: {},
            avatar: null,
            referralCode: null,
          }),
        );
      })
      .catch(error => {
        setLoading(false);
        dispatch(getShowAlertError(handleErrorMessage({}, 'Network Error')));
        console.log(error);
      });
  };

  return (
    <TransitionView animation="fadeIn" style={styles.container}>
      {/* <AppLoading loading={loading} /> */}
      <View style={styles.view}>
        <StatusBar barStyle="light-content" backgroundColor={COLOR_DARK} />
        <ScrollView
          horizontal
          pagingEnabled
          bounces={false}
          data={onboardingImages}
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          onScroll={event => {
            scrollX.setValue(event.nativeEvent.contentOffset.x);
          }}>
          {onboardingImages.map((item, index) => (
            <Image
              key={`${index}`}
              source={item.image}
              style={styles.image}
              resizeMode="stretch"
            />
          ))}
        </ScrollView>

        <View style={styles.bottom}>
          <View style={styles.pagination}>
            {onboardingImages.map((item, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.7, 1, 0.7],
                extrapolateLe: 'clamp',
              });
              let backgroundColor = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: ['transparent', 'white', 'transparent'],
                extrapolate: 'clamp',
              });
              let width = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [6, 12, 6],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={i}
                  style={{
                    ...styles.dots,
                    backgroundColor,
                    opacity,
                    width,
                  }}
                />
              );
            })}
          </View>

          <ButtonCustom
            title={title}
            titleStyle={styles.textButton}
            buttonStyle={styles.buttonCustom}
            onPress={onPressWhiteButton}
          />
          <ButtonCustom
            title={I18n.t('common.skip')}
            titleStyle={styles.textSkip}
            hitSlop={HIT_SLOP}
            buttonStyle={styles.skipButton}
            onPress={skipHandler}
          />
        </View>
      </View>
    </TransitionView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  view: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: DEVICE_WIDTH,
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
  },
  bottom: {
    position: 'absolute',
    alignItems: 'center',
    paddingBottom: 2 * ITEM_SPACE.X_LARGE,
    bottom: 0,
  },
  buttonCustom: {
    width: scale(310),
    height: scale(48),
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    marginVertical: 2 * ITEM_SPACE.MEDIUM,
  },
  textButton: {
    fontFamily: FONT_FAMILY.BOLD,
    color: COLOR_TEXT_PRIMARY,
    fontSize: FONT_SIZE.NORMAL,
  },
  textSkip: {
    color: COLOR_WHITE,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.NORMAL,
  },
  dots: {
    marginHorizontal: 5,
    height: 6,
    borderRadius: 3,
    flexDirection: 'row',
    borderColor: COLOR_WHITE,
    borderWidth: 1,
  },
});

export default withLoading(
  connect(mapStateToProps, mapDispatchToProps)(Onboarding),
  [AUTH.CONFIRM_OTP.HANDLER],
);
