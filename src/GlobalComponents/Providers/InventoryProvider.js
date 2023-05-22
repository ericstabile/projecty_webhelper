import React, { useState } from 'react';
import { InventoryContext } from '../Contexts/InventoryContext';

export const InventoryProvider = ({ children }) => {
  const [inventoryObjectData, setInventoryObjectData] = useState([]);
  const [lastID, setLastID] = useState(0);
  const [assetPathList, setAssetPathList] = useState([]);
  
  const value = 
  { 
    inventoryObjectData
    , setInventoryObjectData
    , lastID
    , setLastID
    , assetPathList
    , setAssetPathList };

  return (
    <InventoryContext.Provider value={value}>
      {children}
    </InventoryContext.Provider>
  );
};