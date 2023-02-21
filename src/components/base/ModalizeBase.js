import {COLOR_BACKGROUND} from '../../constants/colors';
import React, {useCallback, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {scale} from '../../utils/responsive';
import {ITEM_SPACE} from '../../constants/size';

const ModalizeBase = (
  {onClosed, closeOnOverlayTap, children, style, ...props},
  ref,
) => {
  const modal = useRef();

  const onOpen = useCallback(() => {
    modal.current?.open();
  }, [modal]);

  const onClose = useCallback(() => {
    modal.current?.close();
  }, [modal]);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        onOpen,
        onClose,
      };
    },
    [onClose, onOpen],
  );

  const styleCustom = StyleSheet.compose(styles.container, style);

  return (
    <Modalize
      ref={modal}
      withReactModal
      scrollViewProps={{scrollEnabled: false}}
      childrenStyle={{
        backgroundColor: COLOR_BACKGROUND,
      }}
      adjustToContentHeight
      closeOnOverlayTap={closeOnOverlayTap}
      withHandle={false}
      onClosed={onClosed}
      {...props}>
      <View style={styleCustom}>{children}</View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: ITEM_SPACE.LARGE,
    backgroundColor: COLOR_BACKGROUND,
    minHeight: scale(200),
  },
});

export default React.memo(React.forwardRef(ModalizeBase));
