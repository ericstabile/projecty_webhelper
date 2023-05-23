import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import AssetListDropDown from '../../GlobalComponents/AssetListDropDown/AssetListDropDown';
import './AddNewInventoryObjectForm.css';

const AddNewInventoryObjectForm = ({ onAddItem, initialLastId, assetPathList }) => {
  const [lastId, setLastId] = useState(initialLastId);
  const [name, setName] = useState('');
  const [isStackable, setIsStackable] = useState(false);
  const [maxStack, setMaxStack] = useState('');
  const [isIndividualSprite, setIsIndividualSprite] = useState(false);
  const [xLoc, setXLoc] = useState('');
  const [yLoc, setYLoc] = useState('');
  const [iconPath, setIconPath] = useState('');

  const handleAddItem = () => {
    const newItem = {
      ID: lastId,
      Name: name,
      IconPath: iconPath,
      IsStackable: isStackable,
      MaxStack: maxStack,
      IsIndividualSprite: isIndividualSprite,
      XLoc: xLoc,
      YLoc: yLoc
    };
    onAddItem(newItem);
  };

  useEffect(() => {
    setLastId(initialLastId);
  }, [initialLastId]);

  return (
    <div className="form-container">
      <Form>
        <Form.Group controlId="formId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={lastId} readOnly className="form-input" />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        </Form.Group>

        <Form.Group controlId="formIconPath">
          <Form.Label>Icon Path</Form.Label>
          <AssetListDropDown
            items={assetPathList || []} 
            iconPath={iconPath}
            onSelect={(selectedAsset) => setIconPath(selectedAsset)}
          />
        </Form.Group>

        <Form.Group controlId="formIsStackable">
          <Form.Check
            type="checkbox"
            label="Is Stackable"
            checked={isStackable}
            onChange={(e) => setIsStackable(e.target.checked)}
            className="form-checkbox"
          />
        </Form.Group>

        <Form.Group controlId="formMaxStack">
          <Form.Label>Max Stack</Form.Label>
          <Form.Control type="number" value={maxStack} onChange={(e) => setMaxStack(e.target.value)} className="form-input" />
        </Form.Group>

        <Form.Group controlId="formIsIndividualSprite">
          <Form.Check
            type="checkbox"
            label="Is Individual Sprite"
            checked={isIndividualSprite}
            onChange={(e) => setIsIndividualSprite(e.target.checked)}
            className="form-checkbox"
          />
        </Form.Group>

        <Form.Group controlId="formXLoc">
          <Form.Label>X Location</Form.Label>
          <Form.Control type="number" value={xLoc} onChange={(e) => setXLoc(e.target.value)} className="form-input" />
        </Form.Group>

        <Form.Group controlId="formYLoc">
          <Form.Label>Y Location</Form.Label>
          <Form.Control type="number" value={yLoc} onChange={(e) => setYLoc(e.target.value)} className="form-input" />
        </Form.Group>

        <Button
          variant="success"
          onClick={handleAddItem}
          disabled={!name || !maxStack}
          className="form-button"
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddNewInventoryObjectForm;
