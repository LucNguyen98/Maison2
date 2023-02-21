import React from 'react';
import * as Animatable from 'react-native-animatable';

const transitionDuration = 500;
const TransitionView = ({index, ...props}) => {
  return (
    <Animatable.View
      animation="slideInDown"
      duration={transitionDuration}
      delay={index ? (index * transitionDuration) / 5 : 0}
      useNativeDriver
      {...props}
    />
  );
};
export default TransitionView;
