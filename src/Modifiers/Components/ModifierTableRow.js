import { Button } from 'react-bootstrap';

const ModifierTableRow = ({ item, index, toggleEdit }) => (
  <>
    <td>{item.ID}</td>
    <td>{item.Name}</td>
    <td>{item.Description}</td>
    <td>{item.IsString ? 'True' : 'False'}</td>
    <td>{item.StringValue}</td>
    <td>{item.IsBool ? 'True' : 'False'}</td>
    <td>{item.IsBool && item.BoolValue ? 'True' : !item.IsBool ? null : 'False'}</td>
    <td>{item.IsInt ? 'True' : 'False'}</td>
    <td>{item.IntValue}</td>
    <td>
      <Button variant="primary" onClick={() => toggleEdit(index)}>Edit</Button>
    </td>
  </>
);

export default ModifierTableRow;