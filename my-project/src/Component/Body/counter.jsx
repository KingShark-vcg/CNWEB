import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex gap-5 w-96 text-4xl items-center mt-7 mb-7">
      <div className="border-2 border-slate-400 rounded-md size-12 items-center text-center hover:bg-slate-300">
        <button onClick={decrement} className="w-10 h-11">
          -
        </button>
      </div>
      <div className="border-2 border-slate-400 rounded-md h-12 w-16 items-center text-center">
        <h2 className="">{count}</h2>
      </div>
      <div className="border-2 border-slate-400 rounded-md size-12 items-center text-center hover:bg-slate-300">
        <button onClick={increment} className="w-10 h-11">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
