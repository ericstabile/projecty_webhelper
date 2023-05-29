import { Button } from 'react-bootstrap';

const ViewModifierRow = ({ item, index, toggleEdit }) => (
  <>
    <td>{item.ID}</td>
    <td>{item.Name}</td>
    <td>{item.Description}</td>
    <td>{item.IsString}</td>
    <td>{item.StringValue}</td>
    <td>{item.IsBool}</td>
    <td>{item.BoolValue}</td>
    <td>{item.IsInt}</td>
    <td>{item.IntValue}</td>
    <td>
      <Button variant="primary" onClick={() => toggleEdit(index)}>Edit</Button>
    </td>
  </>
);

export default ViewModifierRow;