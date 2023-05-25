import React, { useState, useEffect } from "react";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import './EnumServiceComponent.css';

const EnumServiceComponent = () => {
    const [fileData, setFileData] = useState([]);
    const [enumBody, setEnumBody] = useState("");
    const [enumName, setEnumName] = useState("");

    useEffect(() => {
        let tempStr = [];
    
        fileData.forEach((d, i) => {
            const line = `    ${d.Name} = ${d.ID}${i < fileData.length - 1 ? ',' : ''}`;
            tempStr.push(line);
        });
    
        setEnumBody(tempStr.join('\n'));
    }, [fileData]);

    const handleFileChosen = (content) => {
        setFileData(content);
    }

    const handleEnumNameChange = (event) => {
        setEnumName(event.target.value);
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
        </div>
    );
};

export default EnumServiceComponent;
