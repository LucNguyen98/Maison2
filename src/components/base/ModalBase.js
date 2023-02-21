import React, {forwardRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {COLOR_WHITE} from '../../constants/colors';
import {ITEM_SPACE} from '../../constants/size';
import {scale} from '../../utils/responsive';

function ModalBase({style, children, ...props}, ref) {
  const [isVisible, setVisible] = React.useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  React.useImperativeHandle(
    ref,
    () => {
      return {
        isVisible,
        openModal,
        closeModal,
      };
    },
    [isVisible],
  );

  return (
    <Modal
      avoidKeyboard={true}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={300}
      animationOutTiming={300}
      coverScreen={true}
      onBackdropPress={closeModal}
      isVisible={isVisible}
      {...props}>
      <View style={[styles.modal, style]}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    minHeight: scale(223),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(10),
    paddingHorizontal: ITEM_SPACE.LARGE,
    overflow: 'hidden',
  },
});

export default React.memo(forwardRef(ModalBase));
