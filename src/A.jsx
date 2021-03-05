import React, { useEffect, useState } from "react";

function A() {
  const [stateA, setStateA] = useState(0);
  useEffect(() => console.log("render A"));
  return (
    <div className="a">
      <span>A - {stateA}</span>
      <button onClick={() => setStateA(stateA + 1)}>+</button>
      <B1>
        <C />
      </B1>
      <B2 />
    </div>
  );
}

function B1({ children }) {
  const [stateB1, setStateB1] = useState(0);
  useEffect(() => console.log("render B1"));
  return (
    <div className="b1">
      <span>B1 - {stateB1}</span>
      <button onClick={() => setStateB1(stateB1 + 1)}>+</button>
      {children}
    </div>
  );
}

function B2() {
  const [stateB2, setStateB2] = useState(0);
  useEffect(() => console.log("render B2"));
  return (
    <div className="b2">
      <span>B2 - {stateB2}</span>
      <button onClick={() => setStateB2(stateB2 + 1)}>+</button>
      <C />
    </div>
  );
}

function C() {
  useEffect(() => console.log("render C"));
  return (
    <div className="c">
      <span>C</span>
    </div>
  );
}

export default A;
