import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddModifierPage.css";

const AddModifierPageComponent = ({ navigate }) => {
  const [formFields, setFormFields] = useState({
    id: "",
    name: "",
    description: "",
    isString: false,
    stringValue: "",
    isBool: false,
    boolValue: false,
    isInt: false,
    intVal: 0
  });

  const handleChange = (field, value) => {
    setFormFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here...
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formId">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          value={formFields.id}
          onChange={(e) => handleChange('id', e.target.value)}
        />
      </Form.Group>
  
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={formFields.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </Form.Group>
  
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={formFields.description}
          onChange={(e) => handleChange('description', e.target.value)}
        />
      </Form.Group>
  
      <Form.Group controlId="formIsString">
        <Form.Check
          type="checkbox"
          label="Is String"
          checked={formFields.isString}
          onChange={(e) => handleChange('isString', e.target.checked)}
        />
      </Form.Group>
  
      <Form.Group controlId="formStringValue">
        <Form.Label>String Value</Form.Label>
        <Form.Control
          type="text"
          value={formFields.stringValue}
          onChange={(e) => handleChange('stringValue', e.target.value)}
        />
      </Form.Group>
  
      <Form.Group controlId="formIsBool">
        <Form.Check
          type="checkbox"
          label="Is Bool"
          checked={formFields.isBool}
          onChange={(e) => handleChange('isBool', e.target.checked)}
        />
      </Form.Group>
  
      <Form.Group controlId="formBoolValue">
        <Form.Check
          type="checkbox"
          label="Bool Value"
          checked={formFields.boolValue}
          onChange={(e) => handleChange('boolValue', e.target.checked)}
        />
      </Form.Group>
  
      <Form.Group controlId="formIsInt">
        <Form.Check
          type="checkbox"
          label="Is Int"
          checked={formFields.isInt}
          onChange={(e) => handleChange('isInt', e.target.checked)}
        />
      </Form.Group>
  
      <Form.Group controlId="formIntVal">
        <Form.Label>Int Value</Form.Label>
        <Form.Control
          type="number"
          value={formFields.intVal}
          onChange={(e) => handleChange('intVal', Number(e.target.value))}
        />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
  
};

export default AddModifierPageComponent;
