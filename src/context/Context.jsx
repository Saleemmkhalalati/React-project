import { createContext, useState } from "react";
const useServices = createContext();
const UseServicesProvider = ({ children }) => {
  const [customServices, setcustomServices] = useState([]);

  const changeData = (newData) => {
    setcustomServices(newData);
  };

  const contextValue = {
    customServices,
    setcustomServices,
    changeData, // إذا أردت توفير هذه الدالة في القيمة السياقية
  };

  return (
    <useServices.Provider value={contextValue}>{children}</useServices.Provider>
  );
};

export { UseServicesProvider, useServices };
