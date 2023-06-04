import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ModifierTableRow from "./ModifierTableRow";

const ModifierTableComponent = ({ modifierData, setModifierToEdit }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(modifierData);
  }, [modifierData]);

  const toggleEdit = (item) => {
    setModifierToEdit(item);
  };

  return (
    <Table bordered hover className="table-container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Is String?</th>
          <th>String Value</th>
          <th>Is Bool?</th>
          <th>Bool Value</th>
          <th>Is Int?</th>
          <th>Int Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: item.IsString
                ? "DarkGrey"
                : item.IsBool
                ? "Aqua"
                : "LightSteelBlue",
            }}
          >
            <ModifierTableRow
              item={item}
              index={index}
              toggleEdit={toggleEdit}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ModifierTableComponent;
