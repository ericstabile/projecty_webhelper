import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import './EditModifierRow.css';

const EditModifierRow = ({ item, index, saveEdit, toggleEdit }) => {
  const [id, setId] = useState(item.ID);
  const [name, setName] = useState(item.Name);
  const [description, setDescription] = useState(item.Description);
  const [isString, setIsString] = useState(item.IsString);
  const [stringValue, setStringValue] = useState(item.StringValue);
  const [isBool, setIsBool] = useState(item.IsBool);
  const [boolValue, setBoolValue] = useState(item.BoolValue);
  const [isInt, setIsInt] = useState(item.IsInt);
  const [intVal, setIntVal] = useState(item.IntValue);

  const handleSave = () => {
    saveEdit(index, id, name, description, isString, stringValue, isBool, boolValue, isInt, intVal);
  };

  return (
    <>
      <td>
        <input 
          className="edit-row-input id-input" 
          value={id} 
          onChange={(e) => setId(e.target.value)}
        />
      </td>
      <td>
        <input 
          className="edit-row-input" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input 
          className="edit-row-input" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td className="relative-td">
        <div className="checkbox-td">
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={isString} 
              onChange={(e) => setIsString(e.target.checked)}
            />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>
      </td>
      <td>
        <input 
          className="edit-row-input string-input" 
          value={stringValue} 
          onChange={(e) => setStringValue(e.target.value)}
        />
      </td>
      <td className="relative-td">
        <div className="checkbox-td">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={isBool}
              onChange={(e) => setIsBool(e.target.checked)}
            />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>
      </td>
      <td>
        <input
          className="bool-input"
          type="checkbox"
          checked={boolValue}
          onChange={(e) => setBoolValue(e.target.checked)}
        />
      </td>
      <td className="relative-td">
        <div className="checkbox-td">
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={isInt} 
              onChange={(e) => setIsInt(e.target.checked)}
            />
            <span className="checkbox-checkmark"></span>
          </label>
        </div>
      </td>
      <td>
        <input
          className="int-input"
          type="number"
          value={intVal}
          onChange={(e) => setIntVal(e.target.value)}
        />
      </td>
      <td>
        <Button variant="success" onClick={handleSave}><BiSave /></Button>
        <Button variant="danger" onClick={() => toggleEdit(index)}><GiCancel /></Button>
      </td>
    </>
  );
};

export default EditModifierRow;
