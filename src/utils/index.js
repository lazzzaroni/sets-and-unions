export function arrayToSet(array) {
  const result = [];

  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result.sort((a, b) => a - b);
}

export function union(arr1, arr2) {
  return arrayToSet(arr1.concat(arr2));
}
