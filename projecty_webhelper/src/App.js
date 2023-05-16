import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryObjects from './InventoryObjects';
import AddItemPage from './AddItemPage';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <Router>
      <div>
        <Link to="/inventory">Go to Inventory</Link>
        <Link to="/add">Add Item</Link>

        <Routes>
          <Route path="/inventory" element={<InventoryObjects data={data} setData={setData} />} />
          <Route path="/add" element={<AddItemPage data={data} setData={setData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
