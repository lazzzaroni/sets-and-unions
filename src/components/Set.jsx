import { useState } from "react";

export function Set({ numbers, setNumbers, title }) {
  const [input, setInput] = useState("");

  function updateNumbers(number) {
    const newNumbers = numbers.slice();

    if (newNumbers.includes(parseInt(number))) {
      alert("This number is already in Set");
      setInput("");
      return;
    } else if (number.length == 0) {
      return;
    }

    newNumbers.push(parseInt(number));
    setNumbers(newNumbers.sort((a, b) => a - b));
    setInput("");
  }

  function removeElement(element) {
    const newArray = numbers.filter((number) => number != element);
    setNumbers(newArray);
  }

  return (
    <section className="card">
      <header>
        <h1 className="heading">{title}</h1>
      </header>
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
      <div className="flex">
        {numbers.map((item) => (
          <button
            className="button"
            key={item}
            onClick={() => removeElement(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
