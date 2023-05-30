import React from "react";
import { Form } from "react-bootstrap";

const FormFieldInput = ({ config, formFields, handleChange }) => {
  return (
    <Form.Group className="form-group">
      <Form.Label htmlFor={config.id} className="form-label">
        {config.label}
      </Form.Label>
      <Form.Control
        type={config.type}
        id={config.id}
        value={formFields[config.stateKey]}
        onChange={(e) => handleChange(config.stateKey, e.target.value)}
        readOnly={config.readOnly}
        className="form-control"
      />
    </Form.Group>
  );
};

export default FormFieldInput;
