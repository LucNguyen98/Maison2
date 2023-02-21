import {StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import ModalBase from './base/ModalBase';
import {COLOR_DARK, COLOR_WHITE} from '../constants/colors';
import {scale} from '../utils/responsive';
import {FONT_FAMILY, FONT_SIZE} from '../constants/appFonts';

export default function ModalAert({icon, content, iconStyle, contentStyle}) {
  return (
    <ModalBase style={styles.modalContainer}>
      {!!icon && <Image source={icon} style={[styles.icon, iconStyle]} />}
      {!!content && <Text style={[styles.desc, contentStyle]}>{content}</Text>}
    </ModalBase>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLOR_DARK,
    paddingVertical: scale(15),
  },
  icon: {
    width: scale(24),
    height: scale(18),
  },
  desc: {
    fontSize: FONT_SIZE.SMALL,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLOR_WHITE,
    letterSpacing: 1,
    marginTop: scale(5),
  },
});
