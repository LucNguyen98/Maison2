import {Dimensions, Platform, StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {scale} from '../utils/responsive';

// Dimensions

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios'
    ? DeviceInfo.hasNotch()
      ? 44
      : 20
    : StatusBar.currentHeight;

export const DEVICE_WIDTH = Dimensions.get('window').width;

export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const ITEM_SPACE = {
  TINY: scale(2),
  SMALL: scale(4),
  NORMAL: scale(6),
  MEDIUM: scale(12),
  LARGE: scale(16),
  X_LARGE: scale(20),
  XX_LARGE: scale(24),
};

export const BORDER_RADIUS = scale(8);

export const HIT_SLOP = {
  top: scale(20),
  bottom: scale(20),
  left: scale(20),
  right: scale(20),
};

export const HEADER_HEIGHT = scale(80);

export const BOTTOM_TAB_HEIGHT = DEVICE_HEIGHT * 0.08;

export const PADDING_BOTTOM =
  Platform.OS === 'ios' && DeviceInfo.hasNotch() ? scale(93) : scale(73);

export default {
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
};
