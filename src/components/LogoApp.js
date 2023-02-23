import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {logo_maison} from '../assets/images';
import {scale} from '../utils/responsive';

const LogoApp = ({color, width, height, style}) => {
  const styleCustom = StyleSheet.flatten([
    style,
    width && {width},
    height && {height},
    color && {tintColor: color},
  ]);
  const styleComposer = StyleSheet.compose(styles.logo, styleCustom);
  return <Image source={logo_maison} style={styleComposer} />;
};

const styles = StyleSheet.create({
  logo: {
    width: scale(169),
    height: scale(74),
    resizeMode: 'contain',
  },
});

export default LogoApp;
