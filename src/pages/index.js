import { useEffect, useState } from "react";

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
  return arrayToSet(arr1.concat(arr2));
}

const arr1 = [1, 2, 3, 3, 4, 9, 14, 23, 44, 34, 55];
const arr2 = [5, 1, 11, 7, 8];

function Card({ set, title }) {
  const [numbers, setNumbers] = set;
  const [isUnion, setIsUnion] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (title != "Union") {
      setIsUnion(true);
    }
  }, [title]);

  function removeElement(element) {
    const newArray = numbers.filter((_, i) => i != element);
    setNumbers(newArray);
  }

  function updateNumbers(number) {
    if (numbers.includes(parseInt(number))) {
      alert("This number is already in Set");
      setInput("");
      return;
    } else if (number.length == 0) {
      return;
    }
    numbers.push(parseInt(number));
    setNumbers(numbers);
    setInput("");
  }

  return (
    <section className="card">
      <header>
        <h1 className="heading">{title}</h1>
      </header>
      {isUnion ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateNumbers(input);
          }}
          className="flex"
        >
          <label>
            <input
              className="input"
              type="number"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="Enter number"
            />
          </label>
          <button className="submit">Add to Set</button>
        </form>
      ) : null}
      <div className="flex">
        {numbers.map((item, i) => (
          <button className="button" key={i} onClick={() => removeElement(i)}>
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const setA = useState(arrayToSet(arr1));
  const setB = useState(arrayToSet(arr2));
  const united = useState(union2(setA[0], setB[0]).sort((a, b) => a - b));

  return (
    <div className="container">
      <div className="sets">
        <Card set={setA} title="Set A" />
        <Card set={setB} title="Set B" />
      </div>
      <Card set={united} title="Union" />
    </div>
  );
}
