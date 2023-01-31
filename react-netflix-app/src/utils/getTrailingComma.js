export const getTrailingComma = (iter, index, trailingChar = ',') => (iter.length - 1 > index ? trailingChar : '');
