import React from 'react';

const IsStackableField = ({isCardStackable}) => {
  return (
    <div className="card-field">
      <div className="field-label">IsStackable</div>
      <div className="field-value">{isCardStackable ? "Yes" : "No"}</div>
    </div>
  );
};

export default IsStackableField;
