import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `My counter Program`;
  }, []);
  const addCount = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <p className="m-4">Count:{count}</p>
      <button
        onClick={addCount}
        className="bg-blue-500 px-8 py-2 text-white rounded ml-4"
      >
        Add
      </button>
    </>
  );
}

export default MyComponent;
