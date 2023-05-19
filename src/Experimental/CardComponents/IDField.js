import React from 'react';

const IDField = ({cardId}) => {
  return (
    <div className="card-field">
      <div className="field-label">ID</div>
      <div className="field-value">{cardId}</div>
    </div>
  );
};

export default IDField;
