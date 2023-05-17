// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryObjects from './InventoryObjects';
import AddItemPage from './AddItemPage';

const App = () => {
  const [data, setData] = useState([]);
  const [lastID, setLastID] = useState(0); // Track the last used ID

  const handleLoadJSON = (jsonData) => {
    const loadedData = JSON.parse(jsonData);

    // Find the maximum ID in the loaded data
    let maxID = 0;
    loadedData.forEach((item) => {
      if (item.ID > maxID) {
        maxID = item.ID;
      }
    });

    setData(loadedData);
    setLastID(maxID);
  };

  const handleAddItem = (item) => {
    const newItem = { ...item, ID: lastID + 1 };
    setData([...data, newItem]);
    setLastID(lastID + 1);
  };

  return (
    <Router>
      <div>
        <Link to="/inventory">Go to Inventory</Link>
        <Link to="/add">Add Item</Link>

        <Routes>
          <Route
            path="/inventory"
            element={<InventoryObjects data={data} setData={setData} setLastID={setLastID} />}
          />
          <Route
            path="/add"
            element={<AddItemPage onAddItem={handleAddItem} lastID={lastID} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
