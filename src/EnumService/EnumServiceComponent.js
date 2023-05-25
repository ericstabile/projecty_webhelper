import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import './EnumServiceComponent.css';

const EnumServiceComponent = () => {
  const [fileData, setFileData] = useState([]);
  const [enumBody, setEnumBody] = useState("");
  const [enumName, setEnumName] = useState("");
  const [outputString, setOutputString] = useState([]);

  useEffect(() => {
    let tempStr = [];

    fileData.forEach((d, i) => {
      const line = `    ${d.Name} = ${d.ID}${i < fileData.length - 1 ? ',' : ''}`;
      tempStr.push(line);
    });

    setEnumBody(tempStr.join('\n'));
  }, [fileData]);

  useEffect(() => {
    let tempStr = [];

    tempStr.push(`PUBLIC ENUM ${enumName.toUpperCase()}`);
    tempStr.push('{');
    tempStr.push(enumBody.toUpperCase());
    tempStr.push('}');

    setOutputString(tempStr.join('\n'));
  }, [enumName]);

  const handleFileChosen = (content) => {
    setFileData(content);
  }

  const handleEnumNameChange = (event) => {
    setEnumName(event.target.value);
  }

  const handleCopyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  return (
    <div>
      <LoadJsonComponent handleFileChosen={handleFileChosen} />
      <br />
      <div className="enum-div">
        <pre>
        <code>public enum </code>
        <input type="text" value={enumName} onChange={handleEnumNameChange} />
        <code>{'\n{\n'}</code>
        <code>{enumBody}</code>
        <code>{'\n}'}</code>
        </pre>
      </div>
      <br />
      <Button onClick={() => handleCopyToClipboard(outputString)}>
        Copy To Clipboard
      </Button>
    </div>
  );
};

export default EnumServiceComponent;
