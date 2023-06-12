import { useState, useMemo } from "react";

import { union } from "@/utils";

export function Union({ props }) {
  const { setA, setSetA, setB, setSetB, title } = props;

  const [numbers, setNumbers] = useState(union(setA, setB));

  useMemo(() => {
    setNumbers(union(setA, setB));
  }, [setA, setB]);

  function removeElement(element) {
    const newNumbers = numbers.filter((number) => number != element);
    const newA = setA.filter((number) => number != element);
    const newB = setB.filter((number) => number != element);

    setNumbers(newNumbers);
    setSetA(newA);
    setSetB(newB);
  }

  return (
    <section className="card">
      <header>
        <h1 className="heading">{title}</h1>
      </header>
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
