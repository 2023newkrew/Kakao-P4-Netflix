/* eslint-disable import/prefer-default-export */

export const rand = ({ min = 0, max } = {}) => Math.floor(Math.random() * (max - min + 1)) + min;
