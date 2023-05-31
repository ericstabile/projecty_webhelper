import { useState } from "react";
import { Button } from "react-bootstrap";
import { BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import "./EditActionRow.css";

const EditActionRow = ({ item, index, saveEdit, toggleEdit }) => {
  const [id, setId] = useState(item.ID);
  const [name, setName] = useState(item.Name);
  const [descriptionShort, setDescriptionShort] = useState(item.Description_Short);
  const [descriptionLong, setDescriptionLong] = useState(item.Description_Long);
  const [modelVersion, setModelVersion] = useState(item.ModelVersion);

  const handleSave = () => {
    saveEdit(index, id, name, descriptionShort, descriptionLong, modelVersion);
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
          value={descriptionShort}
          onChange={(e) => setDescriptionShort(e.target.value)}
        />
      </td>
      <td>
        <input
          className="edit-row-input"
          value={descriptionLong}
          onChange={(e) => setDescriptionLong(e.target.value)}
        />
      </td>
      <td>
        <input
          className="edit-row-input"
          value={modelVersion}
          onChange={(e) => setModelVersion(e.target.value)}
        />
      </td>
      <td>
        <Button variant="success" onClick={handleSave}>
          <BiSave />
        </Button>
        <Button variant="danger" onClick={() => toggleEdit(index)}>
          <GiCancel />
        </Button>
      </td>
    </>
  );
};

export default EditActionRow;
