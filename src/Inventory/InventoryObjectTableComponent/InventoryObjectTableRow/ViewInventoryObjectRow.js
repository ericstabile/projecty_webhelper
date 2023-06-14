import React from 'react';
import { Button } from 'react-bootstrap';

const ViewInventoryObjectRow = ({ item, index, toggleEdit }) => (
  <>
    <td>{item.ID}</td>
    <td>{item.Name}</td>
    <td>{item.IconPath}</td>
    <td>{item.IsStackable ? 'True' : 'False'}</td>
    <td>{item.MaxStack}</td>
    <td>{item.IsIndividualSprite ? 'True' : 'False'}</td>
    <td>{item.X}</td>
    <td>{item.Y}</td>
    <td>
      <Button variant="primary" onClick={() => toggleEdit(index)}>Edit</Button>
    </td>
  </>
);

export default ViewInventoryObjectRow;