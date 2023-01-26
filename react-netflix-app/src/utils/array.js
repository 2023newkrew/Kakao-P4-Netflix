/* eslint-disable import/prefer-default-export */

/**
 * Util that divides an array into subarrays of a given size
 *
 * @param {any[]} array
 * @param {number} size
 * @returns {any[any[]]} Divided array
 */
export const divideArray = (array, size) => {
  if (!Array.isArray(array)) return [];

  const subArray = array
    .map((_, index) => (index % size === 0 ? array.slice(index, index + size) : null))
    .filter(Boolean);

  return subArray;
};
