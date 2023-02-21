import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import {FONT_FAMILY, FONT_SIZE} from '../constants/appFonts';
import {
  COLOR_DANGER,
  COLOR_WHITE,
  COLOR_SECONDARY,
  COLOR_TEXT_PRIMARY,
  COLOR_ERROR_INPUT,
} from '../constants/colors';
import {ITEM_SPACE} from '../constants/size';
import {scale} from '../utils/responsive';
import ErrorTextView from './ErrorTextView';

const CodeFieldCustom = ({
  value,
  onChangeText,
  cellCount,
  error,
  blurColor,
  message,
  label,
  labelStyle,
  ...props
}) => {
  const [focused, setFocus] = useState(false);
  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <>
      {!!label && <Text style={[styles.textLabel, labelStyle]}>{label}</Text>}
      <CodeField
        value={value}
        onChangeText={onChangeText}
        cellCount={cellCount}
        onFocus={onFocus}
        onBlur={onBlur}
        rootStyle={styles.codeField}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        {...props}
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={`${index}`}
            style={[
              styles.cell,
              {
                borderBottomColor: error
                  ? COLOR_ERROR_INPUT
                  : blurColor
                  ? blurColor
                  : COLOR_TEXT_PRIMARY,
              },
            ]}>
            <Text style={[styles.textField, {color: blurColor}]}>
              {symbol || (isFocused ? <Cursor delay={500} /> : null)}
            </Text>
          </View>
        )}
      />
      {message && (
        <ErrorTextView
          errorMessage={message}
          style={{marginTop: ITEM_SPACE.LARGE}}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cell: {
    minWidth: scale(79),
    borderBottomColor: COLOR_TEXT_PRIMARY,
    borderBottomWidth: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: ITEM_SPACE.MEDIUM - 2,
  },
  errorMessage: {
    color: COLOR_DANGER,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    paddingTop: ITEM_SPACE.LARGE,
    textAlign: 'center',
  },
  textField: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: scale(26),
    color: COLOR_TEXT_PRIMARY,
  },
  textLabel: {
    color: COLOR_TEXT_PRIMARY,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    marginBottom: scale(24),
  },
});

export default CodeFieldCustom;
