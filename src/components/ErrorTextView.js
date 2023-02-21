import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FONT_FAMILY, FONT_SIZE} from '../constants/appFonts';
import {COLOR_DARK, COLOR_FFF9DD} from '../constants/colors';
import {scale} from '../utils/responsive';

const ErrorTextView = ({errorMessage, style, textStyle}) => {
  return (
    <View style={[styles.errorContainer, style]}>
      <Text style={[styles.errorMessage, textStyle]}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(5),
    backgroundColor: COLOR_FFF9DD,
    marginTop: scale(14),
  },
  errorMessage: {
    color: COLOR_DARK,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    textAlign: 'center',
  },
});

export default React.memo(ErrorTextView);
