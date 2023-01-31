export const getTrailingComma = (iter: any[], index: number, trailingChar = ',') =>
  iter.length - 1 > index ? trailingChar : '';
