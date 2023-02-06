export default class Util {
  static separateList<T>(arr: T[], size: number) {
    const newList = [];
    for (let i = 0; i < arr.length; i += size) {
      newList.push(arr.slice(i, i + size));
    }
    return newList;
  }
  static clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
  }
}
