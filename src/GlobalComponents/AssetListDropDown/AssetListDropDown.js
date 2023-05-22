import React from 'react';

const AssetListDropDown = ({ items }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="assetListDropDown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select Asset
      </button>
      <ul className="dropdown-menu" aria-labelledby="assetListDropDown">
        {items.map((item, index) => (
          <li className="dropdown-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetListDropDown;
