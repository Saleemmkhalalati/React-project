import { createContext, useState } from "react";
const useServices = createContext();
const UseServicesProvider = ({ children }) => {
  const [customServices, setcustomServices] = useState([]);
  const changeData = (newData) => {
    setData(newData);
  };
  const contextValue = {
    customServices,
    setcustomServices,
  };
  return (
    <useServices.Provider value={contextValue}>{children}</useServices.Provider>
  );
};

export { UseServicesProvider, useServices };
