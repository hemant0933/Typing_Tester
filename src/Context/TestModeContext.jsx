import { createContext, useContext, useState } from "react";

const TestModeContext = createContext();

export const TestModeContextProvider = ({ children }) => {
  const [testTimer, setTestTimer] = useState(15);

  const values = {
    testTimer,
    setTestTimer,
  };

  return (
    <TestModeContext.Provider value={values}>
      {children}
    </TestModeContext.Provider>
  );
};

export const useTestMode = () => {
  useContext(TestModeContext);
};
