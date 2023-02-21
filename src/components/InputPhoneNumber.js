import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';
import {FlagVnIcon} from '../assets/icons';
import {dropIcon} from '../assets/images';
import {FONT_FAMILY, FONT_SIZE} from '../constants/appFonts';
import {
  COLOR_DARK,
  COLOR_ERROR_INPUT,
  COLOR_FFF9DD,
  COLOR_TEXT_PRIMARY,
} from '../constants/colors';
import {ITEM_SPACE} from '../constants/size';
import {scale} from '../utils/responsive';
import ErrorTextView from './ErrorTextView';

const AREA_CODE_VN = '+84';

const InputPhoneNumber = ({
  title,
  areaCode = AREA_CODE_VN,
  isAreaCode,
  onChange,
  value,
  isError,
  titleStyle,
  areaStyle,
  inputStyle,
  errorMessage,
  ...props
}) => {
  const [focused, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const inputSection = {
    ...styles.inputSection,
    ...(isError && styles.inputSectionError),
  };

  const areaCodeContainer = {
    ...styles.areaCodeContainer,
    ...(isError && {borderRightColor: COLOR_ERROR_INPUT}),
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <View style={inputSection}>
        <View style={areaCodeContainer}>
          <FlagVnIcon />
          <Text style={[styles.areaCode, areaStyle]}>{areaCode}</Text>
          <Image
            source={dropIcon}
            style={{
              width: scale(10),
              height: scale(10),
            }}
          />
        </View>
        <TextInput
          style={[styles.textInput, inputStyle]}
          onFocus={onFocus}
          onBlur={onBlur}
          keyboardType={isAreaCode ? 'phone-pad' : 'default'}
          value={value}
          onChangeText={onChange}
          {...props}
          maxLength={10}
          autoCorrect={false}
          textContentType="none"
          autoCompleteType="off"
        />
      </View>
      {isError && <ErrorTextView errorMessage={errorMessage} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLOR_TEXT_PRIMARY,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    marginBottom: scale(14),
  },
  countryContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  areaCodeContainer: {
    height: '100%',
    flex: 0.4,
    borderRightWidth: 1,
    borderRightColor: COLOR_TEXT_PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: ITEM_SPACE.LARGE,
    paddingRight: scale(10),
  },
  areaCode: {
    color: COLOR_TEXT_PRIMARY,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    paddingRight: ITEM_SPACE.NORMAL,
  },
  inputSection: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLOR_TEXT_PRIMARY,
    height: scale(44),
    alignItems: 'center',
    borderRadius: scale(4),
  },
  inputSectionError: {
    borderColor: COLOR_ERROR_INPUT,
  },
  textInput: {
    color: COLOR_TEXT_PRIMARY,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    paddingHorizontal: ITEM_SPACE.LARGE,
    flex: 1,
  },
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

export default React.memo(InputPhoneNumber);
