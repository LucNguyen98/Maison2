import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {
  COLOR_BORDER_INPUT,
  COLOR_DANGER,
  COLOR_ERROR_INPUT,
  COLOR_PLACE_HOLDER,
  COLOR_TEXT_PRIMARY,
} from '../constants/colors';
import {CheckMarkCircleIcon, WarningRedIcon} from '../assets/icons';
import {FONT_FAMILY, FONT_SIZE} from '../constants/appFonts';
import {ITEM_SPACE} from '../constants/size';
import {scale} from '../utils/responsive';

const InputCustom = ({
  icon,
  placeholder,
  value,
  isEdit,
  onChange,
  onPress,
  editable,
  keyboardType,
  maxLength,
  verified,
  rightIcon,
  rightIconCustomStyle,
  containerStyle,
  errorMessage,
  verifyOTP,
  onUpdateEmail,
  onPressIcon,
  iconStyle,
  labelStyle,
  label,
  leftIcon,
  leftIconCustomStyle,
  outline,
  ...props
}) => {
  const [focused, setFocus] = useState(false);
  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const verifyStyle = {flex: verified === 0 && value ? 0.7 : 1};

  const errorStyle = outline
    ? {borderColor: errorMessage ? COLOR_DANGER : COLOR_BORDER_INPUT}
    : {borderBottomColor: errorMessage ? COLOR_DANGER : COLOR_BORDER_INPUT};

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {!!label && (
          <View style={styles.labelContainer}>
            <Text
              style={[
                styles.labelTxt,
                outline && styles.labelOutlineTxt,
                labelStyle,
              ]}>
              {label}
            </Text>
          </View>
        )}
        <View style={styles.subContainer}>
          <View
            style={[
              outline ? styles.inputOutLineSection : styles.inputSection,
              errorStyle,
            ]}>
            {leftIcon ? (
              <View style={styles.iconContainer}>
                <Image
                  source={leftIcon}
                  style={[styles.rightIcon, leftIconCustomStyle]}
                />
              </View>
            ) : null}

            <View style={styles.leftSection}>
              <View style={styles.subLeft}>
                <TextInput
                  placeholder={placeholder}
                  style={[
                    styles.input,
                    outline && styles.inputOutLine,
                    verifyStyle,
                  ]}
                  placeholderTextColor={COLOR_PLACE_HOLDER}
                  value={value ? value : null}
                  onChangeText={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  editable={editable}
                  keyboardType={'default'}
                  numberOfLines={1}
                  {...props}
                />
                {verified === 0 && value ? (
                  <TouchableOpacity
                    onPress={onPressIcon}
                    style={[
                      styles.iconContainer,
                      {marginLeft: ITEM_SPACE.LARGE},
                    ]}>
                    <WarningRedIcon width={scale(20)} height={scale(20)} />
                  </TouchableOpacity>
                ) : (
                  <View style={styles.iconContainer} />
                )}
              </View>
              {verified === 1 ? (
                <View style={styles.iconContainer}>
                  <CheckMarkCircleIcon width={scale(16)} height={scale(16)} />
                </View>
              ) : verified === 0 && value ? (
                <TouchableOpacity
                  onPress={onUpdateEmail}
                  style={[styles.verify, {marginBottom: ITEM_SPACE.TINY}]}>
                  <Text style={styles.verifyTxt}>Verify Email</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.iconContainer} />
              )}
            </View>

            {rightIcon ? (
              <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
                <Image
                  source={rightIcon}
                  style={[styles.rightIcon, rightIconCustomStyle]}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
      <Text style={styles.errorTxt}>{errorMessage ? errorMessage : ' '}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  iconHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    marginBottom: scale(8),
  },
  icon: {
    resizeMode: 'contain',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    height: scale(44),
  },
  inputSection: {
    flexDirection: 'row',
    borderRadius: scale(4),
    borderBottomWidth: 2,
    borderBottomColor: COLOR_TEXT_PRIMARY,
  },
  inputOutLineSection: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: scale(4),
    paddingHorizontal: scale(16),
    borderColor: COLOR_BORDER_INPUT,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  subLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: COLOR_TEXT_PRIMARY,
    paddingBottom: ITEM_SPACE.SMALL,
  },
  inputOutLine: {
    color: COLOR_TEXT_PRIMARY,
    height: scale(44),
    paddingBottom: 0,
  },
  iconContainer: {
    width: scale(20),
    height: scale(20),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verify: {
    alignSelf: 'center',
  },
  rightIcon: {
    width: scale(14),
    height: scale(14),
  },
  errorTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLOR_ERROR_INPUT,
    marginTop: ITEM_SPACE.SMALL,
    lineHeight: scale(21),
  },
  verifyTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.TINY,
    color: COLOR_DANGER,
    fontWeight: 500,
  },
  labelOutlineTxt: {
    fontSize: FONT_SIZE.TINY,
    color: COLOR_BORDER_INPUT,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  labelTxt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: COLOR_TEXT_PRIMARY,
    letterSpacing: 1,
  },
});

export default React.memo(InputCustom);
