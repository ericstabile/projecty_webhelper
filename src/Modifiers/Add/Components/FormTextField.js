import React from "react";
import { Form } from "react-bootstrap";

const FormTextField = ({ label, type, stateKey, value, onChange, readOnly }) => {
  return (
    <Form.Group className="form-group">
      <Form.Label htmlFor={stateKey} className="form-label">
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        id={stateKey}
        value={value}
        onChange={(e) => onChange(stateKey, e.target.value)}
        readOnly={readOnly}
        className="form-control"
      />
    </Form.Group>
  );
};

export default FormTextField;
