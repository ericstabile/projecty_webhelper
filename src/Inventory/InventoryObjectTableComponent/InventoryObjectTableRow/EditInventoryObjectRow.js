import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import './EditInventoryObjectRow.css';
import AssetListDropDown from '../../../GlobalComponents/AssetListDropDown/AssetListDropDown';

const EditInventoryObjectRow = ({ item, index, saveEdit, toggleEdit, assetPathList }) => {
  const [id, setId] = useState(item.ID);
  const [name, setName] = useState(item.Name);
  const [iconPath, setIconPath] = useState(item.IconPath);
  const [isStackable, setIsStackable] = useState(item.IsStackable);
  const [maxStack, setMaxStack] = useState(item.MaxStack);
  const [isIndividualSprite, setIsIndividualSprite] = useState(item.IsIndividualSprite);
  const [xLoc, setXLoc] = useState(item.X);
  const [yLoc, setYLoc] = useState(item.Y);

  const handleSave = () => {
    saveEdit(index, id, name, iconPath, isStackable, maxStack, isIndividualSprite, xLoc, yLoc);
  };

  return (
    <>
      <td>
        <input 
          className="edit-row-input id-input" 
          value={id} 
          onChange={(e) => setId(e.target.value)}
        />
      </td>
      <td>
        <input 
          className="edit-row-input" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <AssetListDropDown
          items={assetPathList || []}
          iconPath={iconPath}
          onSelect={setIconPath}
        />
      </td>
      <td className="relative-td">
        <div className="checkbox-td">
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={isStackable} 
              onChange={(e) => setIsStackable(e.target.checked)}
            />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>
      </td>
      <td>
        <input 
          className="edit-row-input max-stack-input" 
          value={maxStack} 
          onChange={(e) => setMaxStack(e.target.value)}
        />
      </td>
      <td className="relative-td">
        <div className="checkbox-td">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={isIndividualSprite}
              onChange={(e) => setIsIndividualSprite(e.target.checked)}
            />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>
      </td>
      <td className="x-y-td">
        <input
          className="x-y-input"
          value={xLoc}
          onChange={(e) => setXLoc(e.target.value)}
        />
      </td>
      <td className="x-y-td">
        <input
          className="x-y-input"
          value={yLoc}
          onChange={(e) => setYLoc(e.target.value)}
        />
      </td>
      <td>
        <Button variant="success" onClick={handleSave}><BiSave /></Button>
        <Button variant="danger" onClick={() => toggleEdit(index)}><GiCancel /></Button>
      </td>
    </>
  );
};

export default EditInventoryObjectRow;
