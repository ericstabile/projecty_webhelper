import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddNewInventoryObjectForm.css';

const AddNewInventoryObjectForm = ({ onAddItem, initialLastId }) => {
  const [lastId, setLastId] = useState(initialLastId);
  const [name, setName] = useState('');
  const [iconPath, setIconPath] = useState('');
  const [isStackable, setIsStackable] = useState(false);
  const [maxStack, setMaxStack] = useState('');

  const handleAddItem = () => {
    const newItem = {
      ID: lastId,
      Name: name,
      IconPath: iconPath,
      IsStackable: isStackable,
      MaxStack: maxStack
    };
    onAddItem(newItem);
  };

  useEffect(() => {
    setLastId(initialLastId);
  }, [initialLastId]);

  return (
    <Form>
      <Form.Group className="custom-form-group" controlId="formId">
        <Form.Label className="form-label">ID:</Form.Label>
        <Form.Label className="form-label">{lastId} - hi</Form.Label>
      </Form.Group>
      <Form.Group className="custom-form-group" controlId="formName">
        <Form.Label className="form-label">Name:</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form-group" controlId="formIconPath">
        <Form.Label className="form-label">Icon Path:</Form.Label>
        <Form.Control type="text" value={iconPath} onChange={(e) => setIconPath(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form-group" controlId="formIsStackable">
        <Form.Check
          type="checkbox"
          label="Is Stackable"
          checked={isStackable}
          onChange={(e) => setIsStackable(e.target.checked)}
          className="label-left form-label" // Add the form-label class
        />
      </Form.Group>
      <Form.Group className="custom-form-group" controlId="formMaxStack">
        <Form.Label className="label-left form-label">Max Stack:</Form.Label>
        <Form.Control type="number" value={maxStack} onChange={(e) => setMaxStack(e.target.value)} />
      </Form.Group>
      <Button 
        variant="success" 
        onClick={handleAddItem} 
        disabled={!name || !maxStack}>
          Add
        </Button>
    </Form>
  );
}

export default AddNewInventoryObjectForm;
