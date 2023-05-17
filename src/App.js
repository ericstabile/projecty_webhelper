import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavigation from './Navigation/AppNavigation';
import HomePage from './HomePage/HomePage';
import InventoryObjects from './Inventory/InventoryObjects';
import AddNewInventoryObjectPage from './Inventory/AddNewInventoryObjectPage';

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
            path="/" element={<HomePage />} />
          <Route
            path="/inventory"
            element={<InventoryObjects inventoryObjectData={inventoryObjectData || []}  setInventoryObjectData={setInventoryObjectData} setLastID={setLastID} />}
          />
          <Route
            path="/add"
            element={<AddNewInventoryObjectPage onAddItem={handleAddItem} inventoryObjectData={inventoryObjectData || []}  setInventoryObjectData={setInventoryObjectData} lastID={lastID + 1} handleFileChosen={handleFileChosen} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
