import React, { useEffect, useState } from "react";

const LearnHooks = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    if (count === count2) {
      console.log('mount')
    }
    return () => {
      console.log('died')
    }
  }, [count, count2]);

  return (
    <div>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>+1</button>;
      </div>
      <div>
        <span>{count2}</span>
        <button onClick={() => setCount2((prev) => prev + 1)}>+1</button>;
      </div>
    </div>
  )
};

export default LearnHooks;
