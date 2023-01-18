import { FONT_SIZE, FONT_WEIGHT } from '@constants/typography.constant';

type FontSizeValue = typeof FONT_SIZE[keyof typeof FONT_SIZE];
type FontWeightValue = typeof FONT_WEIGHT[keyof typeof FONT_WEIGHT];

export type {
  FontSizeValue,
  FontWeightValue
};