import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TileModelPage from './TileModel/TileModelPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tilemodel">Tile Model</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/tilemodel" element={<TileModelPage />} />
          <Route path="/" element={<h1>Welcome to the Home Page!</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;