import React from "react";
import { Form } from "react-bootstrap";

const FormFieldCheckbox = ({ config, formFields, handleChange }) => {
  const handleCheckboxChange = (e) => {
    const { stateKey } = config;
    handleChange(stateKey, e.target.checked);

    if (stateKey === "isBool" && !e.target.checked) {
      handleChange("boolValue", false);
    }
  };

  return (
    <Form.Group className="form-group">
      <Form.Check
        type="checkbox"
        id={config.id}
        label={config.label}
        checked={formFields[config.stateKey]}
        onChange={handleCheckboxChange}
        readOnly={config.readOnly}
        className="form-check"
      />
    </Form.Group>
  );
};

export default FormFieldCheckbox;
