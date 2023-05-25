import React from "react";
import LoadJsonComponent from "../GlobalComponents/LoadJsonComponent/LoadJsonComponent";
import './EnumServiceComponent.css';

const EnumServiceComponent = () => {
    const handleFileChosen = (content) => {
        console.log(content);
    }

    return (
        <div>
            <LoadJsonComponent handleFileChosen={handleFileChosen} />
        </div>
    );
};

export default EnumServiceComponent;