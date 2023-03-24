import { createContext, useState } from "react";

export const exampleContext = createContext();

const ExampleContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const remove = () => {
    setCount((prev) => prev - 1);
  };

  let values = {
    count,
    addCounter: add,
    remove,
  };

  return (
    <exampleContext.Provider value={values}>{children}</exampleContext.Provider>
  );
};

export default ExampleContextProvider;
