import { Button } from 'react-bootstrap';

const ViewActionRow = ({ item, index, toggleEdit }) => (
  <>
    <td>{item.ID}</td>
    <td>{item.Name}</td>
    <td>{item.Description_Short}</td>
    <td>{item.Description_Long}</td>
    <td>{item.ModelVersion}</td>
    <td>
      <Button variant="primary" onClick={() => toggleEdit(index)}>Edit</Button>
    </td>
  </>
);

export default ViewActionRow;
