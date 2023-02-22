import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Indicator from './Indicator';

const BallIndicator = ({
  style,
  size = 40,
  color = 'rgb(255, 255, 255)',
  count = 8,
  ...props
}) => {
  const renderComponent = ({index, count, progress}) => {
    let backgroundColor = color;
    let angle = (index * 360) / count;

    let layerStyle = {
      transform: [
        {
          rotate: angle + 'deg',
        },
      ],
    };

    let inputRange = Array.from(
      new Array(count + 1),
      (item, index) => index / count,
    );

    let outputRange = Array.from(
      new Array(count),
      (item, idx) => 1.2 - (0.5 * idx) / (count - 1),
    );

    for (let j = 0; j < index; j++) {
      outputRange.unshift(outputRange.pop());
    }

    outputRange.unshift(...outputRange.slice(-1));

    let ballStyle = {
      margin: size / 20,
      backgroundColor,
      width: size / 5,
      height: size / 5,
      borderRadius: size / 10,
      transform: [
        {
          scale: progress.interpolate({inputRange, outputRange}),
        },
      ],
    };

    return (
      <Animated.View style={[styles.layer, layerStyle]} {...{key: index}}>
        <Animated.View style={ballStyle} />
      </Animated.View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <Indicator
        style={{width: size, height: size}}
        renderComponent={renderComponent}
        size={size}
        count={count}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  layer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default React.memo(BallIndicator);
