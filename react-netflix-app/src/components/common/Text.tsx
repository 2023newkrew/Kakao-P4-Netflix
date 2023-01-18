import { CSSProperties } from 'react';
import styled from 'styled-components';
import { COLORS } from '@constants/colors.contant';
import { FONT_SIZE, FONT_WEIGHT } from '@constants/typography.constant';
import { FontSizeValue, FontWeightValue } from '@models/typography.model';
import { ColorValue } from '@models/colors.model';

interface TextProps {
  fontSize?: FontSizeValue;
  fontWeight?: FontWeightValue;
  color?: ColorValue;
  textAlign?: CSSProperties['textAlign'];
  wordBreak?: boolean;    
}

export const Text = styled.p<TextProps>`
  font-size: ${props => props.fontSize || FONT_SIZE.s};
  font-weight: ${props => props.fontWeight || FONT_WEIGHT.regular};
  color: ${props => props.color || COLORS.white};
  text-align: ${props => props.textAlign || 'left'};
  word-break: ${props => props.wordBreak ? 'break-all' : 'normal'};
  line-height: 200%;
`;
