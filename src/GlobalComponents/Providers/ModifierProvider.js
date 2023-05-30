import React, { useState } from 'react';
import { ModifierContext } from '../Contexts/ModifierContext';

export const ModifierProvider = ({children}) => {
  const [lastID, setLastID] = useState(0);

  const value = 
  {
    lastID
    , setLastID
  };

  return (
    <ModifierContext.Provider value={value}>
      {children}
    </ModifierContext.Provider>
  );
};