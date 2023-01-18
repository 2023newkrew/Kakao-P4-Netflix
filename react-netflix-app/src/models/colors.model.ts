import { COLORS } from '@constants/colors.contant';


type ColorValue = typeof COLORS[keyof typeof COLORS];

export type {
  ColorValue
};