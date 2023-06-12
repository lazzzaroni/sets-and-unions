import { useState } from "react";

import { Set, Union } from "@/components";

import { arrayToSet } from "@/utils";

const FIRST_ARRAY = [1, 2, 3, 3, 4, 9, 14, 23, 44, 34, 55];
const SECOND_ARRAY = [5, 1, 11, 7, 8, 3, 4];

export default function Home() {
  const [setA, setSetA] = useState(arrayToSet(FIRST_ARRAY));
  const [setB, setSetB] = useState(arrayToSet(SECOND_ARRAY));

  const props = { setA, setSetA, setB, setSetB, title: "Union" };

  return (
    <div className="container">
      <div className="sets">
        <Set numbers={setA} setNumbers={setSetA} title="Set A" />
        <Set numbers={setB} setNumbers={setSetB} title="Set B" />
      </div>
      <Union props={props} />
    </div>
  );
}
