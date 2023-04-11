function arrayToSet(array) {
  const result = [];

  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

function union2(arr1, arr2) {
  const result = arrayToSet(arr1);

  for (const item of arr2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

export default function Home() {
  return <div>hello</div>;
}
