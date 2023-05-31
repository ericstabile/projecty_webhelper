import React, { useState } from 'react';
import { ActionContext } from '../Contexts/ActionContext';

export const ActionProvider = ({children}) => {
  const [lastID, setLastID] = useState(0);

  const value = 
  {
    lastID
    , setLastID
  };

  return (
    <ActionContext.Provider value={value}>
      {children}
    </ActionContext.Provider>
  );
};