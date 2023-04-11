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

const arr1 = [1, 2, 3, 3, 4];
const arr2 = [1, 2, 4, 5, 1, 11, 7, 8];

const setA = arrayToSet(arr1);
const setB = arrayToSet(arr2);
const united = union2(setA, setB);

function Card({ array, title }) {
  return (
    <section>
      <header>
        <h1>{title}</h1>
      </header>
      {array.map((item) => {
        return <span key={item}>{item}&nbsp;</span>;
      })}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Card array={setA} title={"Set A"} />
      <Card array={setB} title={"Set B"} />
      <Card array={united} title={"Union"} />
    </>
  );
}
