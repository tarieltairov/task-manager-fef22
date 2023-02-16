import { createContext, useState } from "react";

export const exampleContext = createContext(null);

const ExampleContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addNumber = (number = 1) => {
    setCount((prev) => prev + number);
  };

  const removeNumber = (number = 1)=>{
    setCount((prev)=>prev-number)
  };

  const values = {
    count,
    add: addNumber,
    remove: removeNumber
  };

  return (
    <exampleContext.Provider value={values}>
      {children}
    </exampleContext.Provider>
  );
};

export default ExampleContextProvider;
