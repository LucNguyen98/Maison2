import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ButtonCustom from './ButtonCustom';
import ModalizeBase from './base/ModalizeBase';
import {CloseIcon} from '../assets/icons';
import {scale} from '../utils/responsive';
import {FONT_SIZE, FONT_FAMILY} from '../constants/appFonts';
import {ITEM_SPACE} from '../constants/size';

const ModalizeCustom = (
  {
    title,
    subTitle,
    buttonPrimaryText,
    buttonSecondaryText,
    buttonSingleText,
    buttonPrimaryPress,
    buttonSecondaryPress,
    buttonSinglePress,
    onCallBackClose,
    isSingleButton = false,
    isHideButton = false,
    style = {},
    children,
  },
  ref,
) => {
  const onHandlePress = onPress => {
    if (onPress) {
      onPress();
      onCloseModal();
    }
  };

  const onCloseModal = () => {
    ref?.current?.onClose?.();
  };

  return (
    <ModalizeBase
      ref={ref}
      style={[styles.modalContainer, style]}
      onClosed={onCallBackClose}>
      <>
        <TouchableOpacity style={styles.closeIcon} onPress={onCloseModal}>
          <CloseIcon width={24} height={24} />
        </TouchableOpacity>
        {(title !== '' || subTitle !== '') && (
          <View style={styles.headerContainer}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text style={styles.txtSubTitle}>{subTitle}</Text>
          </View>
        )}
        {children && children}
        {!isSingleButton && !isHideButton && (
          <View style={styles.bottomContainer}>
            <ButtonCustom
              title={buttonPrimaryText}
              width={161}
              height={50}
              outline
              onPress={() => onHandlePress(buttonPrimaryPress)}
            />
            <ButtonCustom
              title={buttonSecondaryText}
              width={161}
              height={50}
              onPress={() => onHandlePress(buttonSecondaryPress)}
            />
          </View>
        )}
        {isSingleButton && !isHideButton && (
          <View style={styles.bottomSingleContainer}>
            <ButtonCustom
              title={buttonSingleText}
              height={50}
              onPress={() => onHandlePress(buttonSinglePress)}
            />
          </View>
        )}
      </>
    </ModalizeBase>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingHorizontal: scale(40),
    paddingVertical: scale(40),
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  txtTitle: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.BOLD,
    lineHeight: scale(24),
  },
  txtSubTitle: {
    fontSize: FONT_SIZE.LARGE,
    fontFamily: FONT_FAMILY.REGULAR,
    lineHeight: scale(20),
    marginTop: ITEM_SPACE.NORMAL + 2,
    textAlign: 'center',
  },
  bottomContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: scale(30),
  },
  bottomSingleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: scale(30),
  },
  closeIcon: {
    position: 'absolute',
    top: scale(24),
    right: scale(24),
  },
});

export default React.memo(React.forwardRef(ModalizeCustom));
