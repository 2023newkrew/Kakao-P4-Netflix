export const obj2queryString = (obj: object) => {
  return Object.entries(obj)
    .map(([key, value]: [string, string]) => `${key}=${value}`)
    .join('&');
};