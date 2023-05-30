import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ModifierFormFields from "./ModifierFormFields";
import "./AddModifierPage.css";

const AddModifierPageComponent = ({ onAddItem, initialLastId }) => {
  const [formFields, setFormFields] = useState({
    ID: initialLastId,
    Name: "",
    Description: "",
    IsString: false,
    StringValue: "",
    IsBool: false,
    BoolValue: false,
    IsInt: false,
    IntValue: 0,
  });

  const handleChange = (field, value) => {
    setFormFields((prevFields) => {
      let updatedFields = { ...prevFields, [field]: value };
      if (field === "isString" && value) {
        updatedFields = { ...updatedFields, isBool: false, isInt: false };
      } else if (field === "isBool" && value) {
        updatedFields = { ...updatedFields, isString: false, isInt: false };
      } else if (field === "isInt" && value) {
        updatedFields = { ...updatedFields, isString: false, isBool: false };
      }
      return updatedFields;
    });
  };

  useEffect(() => {
    console.log(`AddModifierPageComponent use effect: ${initialLastId}`);
    console.log(`formFields id: ${formFields.id}`);
  }, []);

  return (
    <div className="form-container">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onAddItem(formFields);
        }}
      >
        <ModifierFormFields
          formFields={formFields}
          handleChange={handleChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddModifierPageComponent;
