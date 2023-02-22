import {scale} from '../utils/responsive';

// prefix font Family
const DEFAULT_PREFIX_FONT_FAMILY = 'Oswald';

// fontsize
export const FONT_SIZE = {
  TINY: scale(10),
  SMALL: scale(12),
  NORMAL: scale(14),
  MEDIUM: scale(16),
  LARGE: scale(18),
  X_LARGE: scale(24),
  XX_LARGE: scale(32),
};

// ICON_SIZE
export const ICON_SIZE = {
  SMALL: scale(16),
  NORMAL: scale(24),
  MEDIUM: scale(26),
  LARGE: scale(30),
  X_LARGE: scale(36),
};
// fontFamily
export const FONT_FAMILY = {
  BOLD: `${DEFAULT_PREFIX_FONT_FAMILY}-Bold`,
  BOLD_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}-BoldItalic`,
  // BLACK: `${DEFAULT_PREFIX_FONT_FAMILY}-Black`,
  // BLACK_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}-BlackItalic`,
  // ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}-Italic`,
  // THIN: `${DEFAULT_PREFIX_FONT_FAMILY}-Thin`,
  // THIN_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}-ThinItalic`,
  LIGHT: `${DEFAULT_PREFIX_FONT_FAMILY}-Light`,
  LIGHT_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}-LightItalic`,
  REGULAR: `${DEFAULT_PREFIX_FONT_FAMILY}-Regular`,
  REGULAR_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}-RegularItalic`,
  MEDIUM: `${DEFAULT_PREFIX_FONT_FAMILY}-Medium`,
  MEDIUM_ITALIC: `${DEFAULT_PREFIX_FONT_FAMILY}-MediumItalic`,
  SEMI_BOLD: `${DEFAULT_PREFIX_FONT_FAMILY}-SemiBold`,
};

export default {
  FONT_FAMILY,
  FONT_SIZE,
  ICON_SIZE,
};
