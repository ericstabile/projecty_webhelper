import React from 'react';
import { Form } from 'react-bootstrap';

const LoadJsonComponent = ({ handleFileChosen }) => {
  const fileReader = new FileReader();

  const handleFileRead = (e) => {
    const content = JSON.parse(fileReader.result);
    handleFileChosen(content);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Load JSON File:</Form.Label>
      <Form.Control type="file" accept=".json" onChange={handleFileChange} />
    </Form.Group>
  );
};

export default LoadJsonComponent;
