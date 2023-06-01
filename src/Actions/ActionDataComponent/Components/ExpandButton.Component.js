import React, { useState, useEffect } from "react";
import ButtonGlitch from "../../../GlobalComponents/ButtonGlitch/ButtonGlitch";

function ExpandButtonComponent({ actionId, isExpanded, handleToggleExpand }) {
  const [id, setId] = useState(actionId);
  const [buttonText, setButtonText] = useState("Expand");
  const [expanded, setExpanded] = useState(isExpanded);

  useEffect(() => {
    setExpanded(isExpanded);

    if (!expanded) {
      setButtonText("Collapse");
    } else {
      setButtonText("Expand");
    }
  }, [isExpanded]);

  useEffect(() => {
    setButtonText("Expand");
  }, [])

  return (
    <>
      <ButtonGlitch
        clickEventId={id}
        buttonText={buttonText}
        handleClickEvent={handleToggleExpand}
      />
    </>
  );
}

export default ExpandButtonComponent;
