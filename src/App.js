import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './Navigation/AppNavigation';
import HomePage from './HomePage/HomePage';
import InventoryServiceMainPage from './Inventory/InventoryServiceMainPage/InventoryServiceMainPage';
import AddNewInventoryObjectPage from './Inventory/AddNewInventoryObjectPage/AddNewInventoryObjectPage';
import ExperimentalPage from './Experimental/ExperimentalPage';
import SpriteSheetServiceComponent from './SpritesheetService/SpriteSheetServiceComponent';
import { InventoryContext } from './GlobalComponents/Contexts/InventoryContext';
import EnumServiceComponent from './EnumService/EnumServiceComponent';

const App = () => {
  const [inventoryObjectData, setInventoryObjectData] = useState([]);
  const [lastID, setLastID] = useState(0);
  const [assetPathList, setAssetPathList] = useState([]);

  const loadAssetPath = () => {
    const assetStrings =
    [
      'res://Assets/PNG/LargeSpriteSheets/ultimate_classic_32.png',
      'res://Assets/PNG/LargeSpriteSheets/ultimate_classic_dark_32.png',
      'res://Assets/PNG/LargeSpriteSheets/ultimate_classic_light_32.png'
    ];
  
    const newAssetPathList = [...assetPathList];
  
    assetStrings.forEach((string) => {
      newAssetPathList.push(string);
    });
  
    setAssetPathList(newAssetPathList);
  }

  useEffect(() => {
    loadAssetPath();
  }, []);
  
  return (
    <InventoryContext.Provider 
      value={{ 
        inventoryObjectData, 
        setInventoryObjectData, 
        lastID, 
        setLastID,
        assetPathList,
        setAssetPathList
      }}
    >
      <Router>
        <div className="App">
          <AppNavigation />
          <Routes>
            <Route 
              path="/" 
              element={<HomePage />} />
            <Route 
              path="/projecty_webhelper/*" 
              element={<HomePage />} />
            <Route
              path="/inventory"
              element={<InventoryServiceMainPage />}
            />
            <Route
              path="/add"
              element={<AddNewInventoryObjectPage />}
            />
            <Route
              path="/experimental"
              element={<ExperimentalPage />}
            />
            <Route
              path="/sprite"
              element={<SpriteSheetServiceComponent />}
            />
            <Route
              path="/enum"
              element={<EnumServiceComponent />}
            />
          </Routes>
        </div>
      </Router>
    </InventoryContext.Provider>
  );
};

export default App;
