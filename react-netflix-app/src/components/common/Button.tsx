import styled from 'styled-components';
import { COLORS } from '@constants/colors.contant';
import { FontSizeValue, FontWeightValue } from '@models/typography.model';
import { FONT_SIZE, FONT_WEIGHT } from '@constants/typography.constant';
import { ColorValue } from '@models/colors.model';

interface ButtonProps {
  fontSize?: FontSizeValue;
  fontWeight?: FontWeightValue;
  color?: ColorValue;
  backgroundColor?: ColorValue;
}

export const Button = styled.button<ButtonProps>`
  font-size: ${props => props.fontSize || FONT_SIZE.s};
  font-weight: ${props => props.fontWeight || FONT_WEIGHT.regular};
  background-color: ${props => props.backgroundColor || COLORS.red};
  color: ${props => props.color || COLORS.white};
  
  padding: 0px 17px;
  box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
  appearance: none;
  border: none;
  border-radius: 3px;
`;
