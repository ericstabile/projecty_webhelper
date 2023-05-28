import React, { useState } from 'react';
import { InventoryContext } from '../Contexts/InventoryContext';

export const InventoryProvider = ({ children }) => {
  const [lastID, setLastID] = useState(0);
  
  const value = 
  { 
    lastID
    , setLastID
  };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};