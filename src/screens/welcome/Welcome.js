import {logo_maison, onboading2_new} from '../../assets/images';
import React from 'react';
import {Image, StatusBar, View, StyleSheet, Text} from 'react-native';
import {DEVICE_WIDTH} from '../../constants/size';
import {COLOR_WHITE, COLOR_DARK} from '../../constants/colors';
import {FONT_SIZE, FONT_FAMILY} from '../../constants/appFonts';
import {scale} from '../../utils/responsive';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLOR_DARK} />
      <Image
        source={onboading2_new}
        style={styles.image}
        resizeMode="stretch"
      />
      <Text style={styles.textTitle}>{'Welcome to'}</Text>
      <Image source={logo_maison} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: DEVICE_WIDTH,
    height: '100%',
    position: 'absolute',
    ...StyleSheet.absoluteFill,
  },
  textTitle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: COLOR_WHITE,
    lineHeight: scale(18),
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: scale(8),
  },
  logo: {
    width: scale(169),
    height: scale(74),
    resizeMode: 'contain',
  },
});

export default Welcome;
