import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './TopRowComponent.css';

const TopRowComponent = ({ handleAddNewItem, handleResetState }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="button-container">
      <div className="button-column">
        <Button variant="primary" onClick={handleGoBack} className="matrix-button">
          Go Back
        </Button>
      </div>
      <div className="button-column">
        <Button variant="success" onClick={handleAddNewItem} className="matrix-button">
          Add New Item
        </Button>
      </div>
      <div className="button-column">
        <Button variant="danger" onClick={handleResetState} className="matrix-button">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TopRowComponent;
