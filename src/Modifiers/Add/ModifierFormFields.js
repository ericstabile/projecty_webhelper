import React from "react";
import modifierFormFieldsConfig from "./Components/modifierFormFieldsConfig.js";
import "./AddModifierPage.css";
import FormFieldCheckbox from "./Components/FormFieldCheckbox";
import FormFieldInput from "./Components/FormFieldInput";

const ModifierFormFields = ({ formFields, handleChange }) => {
  const shouldDisplayField = (config) => {
    if (config.stateKey === "BoolValue" && formFields.isBool) {
      return false;
    }
    return true;
  };

  return (
    <>
      {modifierFormFieldsConfig.map((config) => {
        if (config.type === "checkbox") {
          return (
            <FormFieldCheckbox
              key={config.id}
              config={config}
              formFields={formFields}
              handleChange={handleChange}
            />
          );
        } else if (shouldDisplayField(config)) {
          return (
            <FormFieldInput
              key={config.id}
              config={config}
              formFields={formFields}
              handleChange={handleChange}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default ModifierFormFields;
