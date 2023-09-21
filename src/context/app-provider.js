


import React, { createContext, useContext, useEffect, useState } from 'react';
import { ApiService } from '../service/ApiService';

const AppContext = createContext();

export const useTheme = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const api = new ApiService()

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
        try {
            const response = await api.getAll();
            setItems(response);
    
        } catch(err) {
            console.error(err)
        }
    }
    getItems()
    
  }, [items])
  return (
    <AppContext.Provider value={{ items, setItems}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
