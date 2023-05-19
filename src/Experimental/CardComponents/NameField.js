import React from 'react';

const NameField = ({cardName}) => {
  return (
    <div className="card-field">
      <div className="field-label">Name</div>
      <div className="field-value">{cardName}</div>
    </div>
  );
};

export default NameField;
