import React from 'react';

const MaxStackField = ({maxCardStack}) => {
  return (
    <div className="card-field">
      <div className="field-label">MaxStack</div>
      <div className="field-value">{maxCardStack}</div>
    </div>
  );
};

export default MaxStackField;
