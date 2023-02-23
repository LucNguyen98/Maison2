import React from 'react';
import {TouchableWithoutFeedback, Keyboard, View} from 'react-native';

const withDismissKeyboard = Comp => {
  return ({children, ...props}) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...props}>{children}</Comp>
    </TouchableWithoutFeedback>
  );
};
export default withDismissKeyboard(View);
