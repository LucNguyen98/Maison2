/* eslint-disable react-hooks/exhaustive-deps */
// import {firebase} from '@react-native-firebase/dynamic-links';
// import {
//   getConfirmOTPHandle,
//   getConfirmOTPSuccess,
//   getMemberViewPointSuccess,
// } from 'actions/auth';
// import {getShowAlertError} from 'actions/system';
// import {AUTH} from 'actionsType';
import {
  logo_maison,
  onboading1_new,
  onboading2_new,
  onboading3_new,
  onboarding1,
  onboarding1_small,
  onboarding2,
  onboarding2_small,
  onboarding3,
  onboarding3_small,
} from '../../assets/images';
// import CrashlyticsService from 'helpers/CrashlyticsService';
// import FirebaseAnalyticsService from 'helpers/FirebaseAnalyticsService';
// import {handleErrorMessage} from 'helpers/handleError';
import React, {useEffect, useRef, useState} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {getIsFirstDown} from 'selectors/auth';
// import I18n from 'src/i18n';
// import {ActionObject} from 'src/Models';
import {
  TransitionView,
  ButtonCustom,
  // withLoading,
  ModalLoading,
} from '../../components';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
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
  COLOR_TRANSPARENT,
} from '../../constants/colors';
import {FONT_SIZE, FONT_FAMILY} from '../../constants/appFonts';
import {scale} from '../../utils/responsive';

const onboardingImages = [
  {
    id: '0',
    image: DEVICE_HEIGHT > 667 ? onboading1_new : onboading1_new,
    title: 'Loyalty App Memeber',
    content:
      'Be a loyalty app member and enjoy all the exlusive for\nmembers only perks\nand promotions.',
  },
  {
    id: '1',
    image: DEVICE_HEIGHT > 667 ? onboading2_new : onboading2_new,
    title: 'Shop Your Favorite Brands',
    content:
      'Shop from our wide variety of brands at the comfort of your homes or you even pick it up from the store nearest you.',
  },
  {
    id: '2',
    image: DEVICE_HEIGHT > 667 ? onboading3_new : onboading3_new,
    title: 'Get Exclusive Offers',
    content:
      'Enjoy all our exclusive perks, offers, events, promotions and get to know more about the brands we offer.',
  },
];

const Onboarding = ({navigation}) => {
  // const dispatch = useDispatch();
  // const isFirstDown = useSelector(state => getIsFirstDown(state));

  // const analytics = FirebaseAnalyticsService.getInstance();
  // const crashlytics = CrashlyticsService.getInstance();

  let scrollX = useRef(new Animated.Value(0)).current;
  let position = useRef(
    Animated.divide(scrollX, Dimensions.get('window').width),
  ).current;

  // const [title, setTitle] = useState(I18n.t('auth.register'));
  const [title, setTitle] = useState('Create Account');
  const [loading, setLoading] = useState(false);
  const [isFirstMount, setFirstMount] = useState(false);

  // useEffect(() => {
  //   if (!isFirstMount) {
  //     setFirstMount(true);
  //     navigation.navigate('LoginScreen');
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!isFirstDown) {
  //     setTitle(I18n.t('auth.login'));
  //   }
  // }, [isFirstDown]);

  // const onPressWhiteButton = () => {
  //   crashlytics.logCrash('WHITE_BUTTON');
  //   try {
  //     let actionObj = new ActionObject(
  //       'ONBOARDING',
  //       'WHITE_BUTTON',
  //       'ONBOARDING',
  //     );
  //     analytics.logAction(actionObj);
  //     navigation.navigate('LoginScreen');
  //   } catch (error) {
  //     console.log(error);
  //     crashlytics.errorRecord(error);
  //   }
  // };

  // const skipHandler = () => {
  //   crashlytics.logCrash('SKIP_BUTTON');
  //   setLoading(true);
  //   firebase
  //     .auth()
  //     .signInAnonymously()
  //     .then(async () => {
  //       const idTokenResult = await firebase
  //         .auth()
  //         .currentUser.getIdTokenResult(true);
  //       dispatch(
  //         getConfirmOTPSuccess({
  //           firebaseResponse: {
  //             token: idTokenResult.token,
  //             expirationTime: idTokenResult.expirationTime,
  //           },
  //           memberCode: 'Maison_prod20210519001',
  //           phoneNumber: '0283936942',
  //           type: 'login',
  //         }),
  //       );

  //       dispatch(
  //         getMemberViewPointSuccess({
  //           memberLoyaltyInfo: {},
  //           avatar: null,
  //           referralCode: null,
  //         }),
  //       );
  //     })
  //     .catch(error => {
  //       setLoading(false);
  //       dispatch(getShowAlertError(handleErrorMessage({}, 'Network Error')));
  //       console.log(error);
  //     });
  // };

  const renderPagination = () =>
    onboardingImages.map((item, i) => {
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
      let size = position.interpolate({
        inputRange: [i - 1, i, i + 1],
        outputRange: [4, 8, 4],
        extrapolate: 'clamp',
      });

      let borderRadius = position.interpolate({
        inputRange: [i - 1, i, i + 1],
        outputRange: [2, 4, 2],
        extrapolate: 'clamp',
      });
      return (
        <Animated.View
          key={i}
          style={{
            ...styles.dots,
            backgroundColor,
            opacity,
            width: size,
            height: size,
            borderRadius,
          }}
        />
      );
    });

  return (
    <TransitionView animation="fadeIn" style={styles.container}>
      <ModalLoading loading={loading} />
      <View style={styles.view}>
        <StatusBar barStyle="light-content" backgroundColor={COLOR_DARK} />
        <Animated.FlatList
          keyExtractor={(item, index) => index + ''}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={onboardingImages}
          scrollEventThrottle={1}
          onScroll={event => {
            scrollX.setValue(event.nativeEvent.contentOffset.x);
          }}
          renderItem={({item}) => {
            return (
              <ImageBackground
                source={item.image}
                style={styles.image}
                resizeMode="stretch">
                <Image source={logo_maison} style={styles.logo} />
                <View style={styles.contentContainer}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textContent}>{item.content}</Text>
                </View>
              </ImageBackground>
            );
          }}
        />
        <View style={styles.bottom}>
          <View style={styles.pagination}>{renderPagination()}</View>
          <ButtonCustom
            title={title}
            height={scale(48)}
            isUppercase={false}
            titleStyle={styles.textButton}
            // onPress={onPressWhiteButton}
          />
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.textSkip}>Maybe Later</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: scale(60),
    alignItems: 'center',
  },
  bottom: {
    position: 'absolute',
    alignItems: 'center',
    paddingBottom: 2 * ITEM_SPACE.X_LARGE,
    paddingHorizontal: ITEM_SPACE.LARGE,
    bottom: 0,
    width: '100%',
  },
  textButton: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.NORMAL,
  },
  skipButton: {
    marginTop: scale(10),
    padding: scale(5),
  },
  textSkip: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLOR_WHITE,
  },
  dots: {
    marginHorizontal: 5,
    height: 4,
    borderRadius: 2,
    flexDirection: 'row',
    borderColor: COLOR_WHITE,
    borderWidth: 1,
  },
  textTitle: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: COLOR_WHITE,
    lineHeight: scale(24),
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: scale(5),
  },
  textContent: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLOR_WHITE,
    lineHeight: scale(18),
    textAlign: 'center',
    width: scale(305),
  },
  logo: {
    width: scale(137),
    height: scale(60),
    resizeMode: 'contain',
    position: 'absolute',
    top: '31%',
  },
  contentContainer: {
    position: 'absolute',
    top:
      DEVICE_HEIGHT > 667
        ? DEVICE_HEIGHT * 0.31 + scale(212) + scale(35)
        : DEVICE_HEIGHT * 0.31 + scale(212 / 2) + scale(35),
  },
});

// export default withLoading(
//   connect(mapStateToProps, mapDispatchToProps)(Onboarding),
//   [AUTH.CONFIRM_OTP.HANDLER],
// );

export default Onboarding;
