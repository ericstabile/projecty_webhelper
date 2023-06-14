import React, { useRef, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LoadJsonComponent.css';

const LoadJsonComponent = ({ handleFileChosen, typeOfFile }) => {
  const fileInputRef = useRef(null);
  const [fileType, setFileType] = useState(typeOfFile);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const content = JSON.parse(fileReader.result);
        handleFileChosen(content);
      };
      fileReader.readAsText(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    setFileType(typeOfFile);
  }, [typeOfFile])

  return (
    <div className="load-json-container">
      <div className="load-json-content">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className="load-json-label">Load {fileType} JSON File:</Form.Label>
          <div className="load-json-input-wrapper">
            <Form.Control
              ref={fileInputRef}
              type="file"
              accept=".json"
              className="form-control-file load-json-input"
              onChange={handleFileChange}
              style={{ display: 'none' }}  // Hide the input control
            />
            <Button variant="primary" onClick={handleClick}>
              Choose File
            </Button>
          </div>
        </Form.Group>
      </div>
    </div>
  );
};

export default LoadJsonComponent;
