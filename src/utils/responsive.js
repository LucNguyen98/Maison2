/**
 * Source
 * https://github.com/marudy/react-native-responsive-screen
 */

// packages
import {Dimensions} from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

export const scale = (value, byWidth = true) => {
  /**
   * byWidth's default value is true
   */
  if (byWidth) {
    return (screenWidth / 375) * value;
  }
  return (screenHeight / 669) * value;
};
