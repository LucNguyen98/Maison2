import BallIndicator from './BallIndicator';
import React, {useEffect, useRef} from 'react';
import ModalBase from './base/ModalBase';
import {StyleSheet} from 'react-native';
import {COLOR_TRANSPARENT, COLOR_WHITE} from '../constants/colors';

const ModalLoading = ({loading = false}) => {
  const modalRef = useRef();

  useEffect(() => {
    if (loading) {
      modalRef.current?.openModal?.();
    } else {
      modalRef.current?.closeModal?.();
    }
  }, [loading]);

  return (
    <ModalBase ref={modalRef} style={styles.modal}>
      <BallIndicator color={COLOR_WHITE} />
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: COLOR_TRANSPARENT,
  },
});

export default React.memo(ModalLoading);
