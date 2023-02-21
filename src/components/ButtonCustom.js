import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {FONT_FAMILY} from '../constants/appFonts';
import {COLOR_TEXT_PRIMARY, COLOR_WHITE} from '../constants/colors';
import {scale} from '../utils/responsive';

const ButtonCustom = ({
  title,
  style,
  width,
  height,
  onPress,
  disabled,
  children,
  fontSize,
  colorText,
  titleStyle,
  disabledText,
  backgroundColor,
  outline = false,
  isUppercase = false,
  activeOpacity,
  fontWeight,
  borderRadius,
  ...props
}) => {
  const styleCustom = StyleSheet.flatten([
    style,
    width && {width},
    height && {height},
    backgroundColor && {backgroundColor},
    borderRadius && {borderRadius},
  ]);
  const styleComposer = StyleSheet.compose(styles.button, styleCustom);
  const styleText = StyleSheet.compose(
    styles.title,
    colorText && {color: colorText},
  );

  const onHandlePress = () => {
    if (typeof onPress === 'function') {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={onHandlePress}
      disabled={disabled}
      style={({pressed}) => [
        {
          opacity: pressed ? activeOpacity : 1,
        },
        styleComposer,
        outline && styles.outlineBtn,
        disabled && styles.disableBtn,
      ]}
      {...props}>
      {children ? (
        children
      ) : (
        <Text
          style={[
            styleText,
            titleStyle,
            fontSize && {fontSize},
            outline && {color: COLOR_TEXT_PRIMARY},
            isUppercase && {textTransform: 'uppercase'},
            fontWeight && {fontWeight},
          ]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_TEXT_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: scale(56),
  },
  title: {
    fontSize: scale(14),
    color: COLOR_WHITE,
    textAlign: 'center',
    lineHeight: scale(21),
    letterSpacing: 1,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  disabledText: {
    // color: CUSTOM_COLOR.Orange300,
  },
  outlineBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLOR_TEXT_PRIMARY,
  },
  disableBtn: {
    opacity: 0.5,
  },
});

ButtonCustom.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  colorText: PropTypes.string,
  titleStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  outline: PropTypes.bool,
  isUppercase: PropTypes.bool,
  activeOpacity: PropTypes.number,
};

ButtonCustom.defaultProps = {
  style: {},
  titleStyle: {},
  disabled: false,
  disabledText: '',
  outline: false,
  isUppercase: false,
  activeOpacity: 0.5,
};

export default React.memo(ButtonCustom);
