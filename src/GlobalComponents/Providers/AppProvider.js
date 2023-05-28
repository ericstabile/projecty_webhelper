import React, { useState } from 'react';
import { AppContext } from '../Contexts/AppContext';

export const AppProvider = ({ children }) => {
    const [modifierData, setModifierData] = useState([]);
    const [actionData, setActionData] = useState([]);
    const [inventoryObjectData, setInventoryObjectData] = useState([]);
    const [assetPathList, setAssetPathList] = useState([]);

    const value = 
    {
        modifierData
        , setModifierData
        , actionData
        , setActionData
        , inventoryObjectData
        , setInventoryObjectData
        , assetPathList
        , setAssetPathList
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};