import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddItemPage = ({ setData, data }) => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setData([...data, { 
          ID: e.target.ID.value, 
          Name: e.target.Name.value, 
          IconPath: e.target.IconPath.value, 
          IsStackable: e.target.IsStackable.checked, 
          MaxStack: e.target.MaxStack.value 
        }]);
        navigate("/inventory"); // navigate back to inventory page after submitting the form
      }}
    >
      <input name="ID" placeholder="ID" />
      <input name="Name" placeholder="Name" />
      <input name="IconPath" placeholder="IconPath" />
      <input type="checkbox" name="IsStackable" />
      <input name="MaxStack" placeholder="MaxStack" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItemPage;
