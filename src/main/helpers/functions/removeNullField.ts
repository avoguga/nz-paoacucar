export const removeNullFields = (obj: object) => {
  for (let prop in obj) {
    if (obj[prop] === null) {
      delete obj[prop];
    } else if (typeof obj[prop] === 'object') {
      removeNullFields(obj[prop]);
    }
  }
  return obj;
};
