import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './Navigation/AppNavigation';
import HomePage from './HomePage/HomePage';
import InventoryServiceMainPage from './Inventory/InventoryServiceMainPage/InventoryServiceMainPage';
import AddNewInventoryObjectPage from './Inventory/AddNewInventoryObjectPage/AddNewInventoryObjectPage';
import ExperimentalPage from './Experimental/ExperimentalPage';
import SpriteSheetServiceComponent from './SpritesheetService/SpriteSheetServiceComponent';

const App = () => {
  const [inventoryObjectData, setInventoryObjectData] = useState([]);
  const [lastID, setLastID] = useState(0);

  const handleAddItem = (item) => {
    const newItem = { ...item, ID: lastID + 1 };
    setInventoryObjectData([...inventoryObjectData, newItem]);
    setLastID(lastID + 1);
  };

  const handleFileChosen = (content) => {
    setInventoryObjectData(content);
  };

  return (
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
            element={
              <InventoryServiceMainPage
                inventoryObjectData={inventoryObjectData || []}
                setInventoryObjectData={setInventoryObjectData}
                setLastID={setLastID}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddNewInventoryObjectPage
                onAddItem={handleAddItem}
                lastID={lastID}
              />
            }
          />
          <Route
            path="/experimental"
            element={
              <ExperimentalPage />
            } />
          <Route
            path="/sprite"
            element={
              <SpriteSheetServiceComponent />
            } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
