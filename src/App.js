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

const App = () => {
  const [inventoryObjectData, setInventoryObjectData] = useState([]);
  const [lastID, setLastID] = useState(0);
  const [assetPath, setAssetPath] = useState([]);

  const handleAddItem = (item) => {
    const newItem = { ...item, ID: lastID + 1 };
    setInventoryObjectData([...inventoryObjectData, newItem]);
    setLastID(lastID + 1);
  };

  const handleFileChosen = (content) => {
    setInventoryObjectData(content);
  };

  const loadAssetPath = () => {
    const assetStrings =
    [
      'assets/bass'
      , 'assets/grass'];

      assetStrings.forEach((string) => {
        setAssetPath((prevAssetPath) => [...prevAssetPath, string]);
      });
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
        assetPath,
        setAssetPath 
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
          </Routes>
        </div>
      </Router>
    </InventoryContext.Provider>
  );
};

export default App;
