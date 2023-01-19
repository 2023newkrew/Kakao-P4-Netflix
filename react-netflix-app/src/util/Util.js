export default class Util {
  static separateList(arr, size) {
    const newList = [];
    for (let i = 0; i < arr.length; i += size) {
      newList.push(arr.slice(i, i + size));
    }
    return newList;
  }
  static clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }
}
