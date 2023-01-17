import { CSSProperties } from 'react';
import styled from 'styled-components';
import { colors } from '@constants/colors.contant';

const fontSize = {
  title: '30px',
  subTitle: '24px',
  content: '16px'
} as const;
const fontWeight = {
  regular: '400',
  bold: '700'
} as const;

type fontSizeValue = typeof fontSize[keyof typeof fontSize];
type fontWeightValue = typeof fontWeight[keyof typeof fontWeight];

interface TextProps {
  fontSize?: fontSizeValue;
  fontWeight?: fontWeightValue;
  color?: string;
  textAlign?: CSSProperties['textAlign'];
  wordBreak?: boolean;    
}

export const Text = styled.span<TextProps>`
  font-size: ${props => props.fontSize || fontSize.content};
  font-weight: ${props => props.fontWeight || fontWeight.regular};
  color: ${props => props.color || colors.white};
`;
