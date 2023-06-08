import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GiCancel } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";

function ModifierItem({
  modifier,
  overrideValue,
  isEditing,
  onEditModifier,
  onSaveModifier,
  onRemoveModifier,
}) {
  const [override, setOverride] = useState(overrideValue);
  const [tempValues, setTempValues] = useState({
    StringValue: "",
    BoolValue: false,
    IntValue: 0,
  });

  useEffect(() => {
    if (modifier) {
      setTempValues({
        StringValue: modifier.StringValue,
        BoolValue: modifier.BoolValue,
        IntValue: modifier.IntValue,
      });
    }
  }, [modifier]);

  const handleInputChange = (type, value) => {
    setTempValues({
      ...tempValues,
      [type]: value,
    });

    setOverride(null);
  };

  const handleSave = () => {
    onSaveModifier(modifier.ID, tempValues);
  };

  return (
    <div className="modifier">
      <div className="added-modifier-button-container">
        <button
          className="edit-button"
          onClick={() => onEditModifier(modifier.ID)}
        >
          <FiEdit />
        </button>
        <button
          className="remove-button"
          onClick={() => onRemoveModifier(modifier.ID)}
        >
          <GiCancel />
        </button>
      </div>
      {modifier && (
        <>
          <h4>
            {modifier.Name} (ID: {modifier.ID})
          </h4>
          <p>{modifier.Description}</p>
          {isEditing ? (
            <>
              {modifier.IsString && (
                <input
                  type="text"
                  value={
                    override !== null && override !== undefined
                      ? override
                      : tempValues.StringValue
                  }
                  onChange={(e) =>
                    handleInputChange("StringValue", e.target.value)
                  }
                />
              )}
              {modifier.IsBool && (
                <select
                  value={
                    override !== null && override !== undefined
                      ? override.toString()
                      : tempValues.BoolValue.toString()
                  }
                  onChange={(e) =>
                    handleInputChange("BoolValue", e.target.value === "true")
                  }
                >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              )}
              {modifier.IsInt && (
                <input
                  type="number"
                  value={
                    override !== null && override !== undefined
                      ? override
                      : tempValues.IntValue
                  }
                  onChange={(e) =>
                    handleInputChange("IntValue", Number(e.target.value))
                  }
                />
              )}
              <button className="save-modifier-button" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              {modifier.IsString && (
                <p>Value: {override || tempValues.StringValue}</p>
              )}
              {modifier.IsBool && (
                <p>
                  Value:{" "}
                  {override !== null && override !== undefined
                    ? override
                      ? "True"
                      : "False"
                    : tempValues.BoolValue
                    ? "True"
                    : "False"}
                </p>
              )}
              {modifier.IsInt && (
                <p>Value: {override || tempValues.IntValue}</p>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

ModifierItem.propTypes = {
  modifier: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onEditModifier: PropTypes.func.isRequired,
  onSaveModifier: PropTypes.func.isRequired,
  onRemoveModifier: PropTypes.func.isRequired,
};

export default ModifierItem;
