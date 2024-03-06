// context.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [rupeesHistory, setRupeesHistory] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, jobs, setJobs, rupeesHistory, setRupeesHistory }}>
      {children}
    </AppContext.Provider>
  );
};
