import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import InventoryObjects from './Inventory/InventoryObjects';
import AddItemPage from './Inventory/AddNewInventoryObjectPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './Navigation/AppNavigation';

const App = () => {
  const [data, setData] = useState([]);
  const [lastID, setLastID] = useState(0);
  
  const handleAddItem = (item) => {
    const newItem = { ...item, ID: lastID + 1 };
    setData([...data, newItem]);
    setLastID(lastID + 1);
  };

  const handleFileChosen = (content) => {
    setData(content);
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
            element={<InventoryObjects data={data} setData={setData} setLastID={setLastID} />}
          />
          <Route
            path="/add"
            element={<AddItemPage onAddItem={handleAddItem} setData={setData} lastID={lastID} handleFileChosen={handleFileChosen} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
