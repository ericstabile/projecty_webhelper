import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddNewInventoryObjectForm.css';

const AddNewInventoryObjectForm = ({ onAddItem }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [iconPath, setIconPath] = useState('');
  const [isStackable, setIsStackable] = useState(false);
  const [maxStack, setMaxStack] = useState('');

  const handleAddItem = () => {
    const newItem = {
      ID: id,
      Name: name,
      IconPath: iconPath,
      IsStackable: isStackable,
      MaxStack: maxStack
    };
    onAddItem(newItem);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formId">
        <Form.Label className="form-label">ID:</Form.Label>
        <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label className="form-label">Name:</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formIconPath">
        <Form.Label className="form-label">Icon Path:</Form.Label>
        <Form.Control type="text" value={iconPath} onChange={(e) => setIconPath(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formIsStackable">
        <Form.Check
          type="checkbox"
          label="Is Stackable"
          checked={isStackable}
          onChange={(e) => setIsStackable(e.target.checked)}
          className="label-left form-label" // Add the form-label class
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMaxStack">
        <Form.Label className="label-left form-label">Max Stack:</Form.Label>
        <Form.Control type="text" value={maxStack} onChange={(e) => setMaxStack(e.target.value)} />
      </Form.Group>
      <Button variant="success" onClick={handleAddItem}>Add</Button>
    </Form>
  );
}

export default AddNewInventoryObjectForm;
