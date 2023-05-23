import React, { useState, useEffect } from 'react';
import './AssetListDropDown.css';

const AssetListDropDown = ({ items, iconPath, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select Asset");
  const [customItem, setCustomItem] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  const handleCustomItemChange = (e) => {
    setCustomItem(e.target.value);
  };

  const handleCustomItemSelect = () => {
    setSelectedItem(customItem);
    onSelect(customItem);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedItem(iconPath);
  }, [iconPath])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className={`dropdown ${isOpen ? 'show' : ''}`}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="assetListDropDown"
          onClick={toggleOpen}
        >
          {selectedItem}
        </button>
        {isOpen && (
          <ul className="dropdown-menu" aria-labelledby="assetListDropDown">
            {items.map((item) => (
              <li 
                className="dropdown-item" 
                key={item}
                onClick={() => handleSelectItem(item)}
              >
                {item}
              </li>
            ))}
            <li>
              <input 
                type="text" 
                value={customItem} 
                onChange={handleCustomItemChange} 
                className="form-control custom-input" 
              />
              <button 
                onClick={handleCustomItemSelect}
                className="btn btn-primary custom-button"
              >
                Select Custom Item
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default AssetListDropDown;
