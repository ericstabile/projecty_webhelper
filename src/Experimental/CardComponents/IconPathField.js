import React from 'react';

const IconPathField = ({cardIconPath}) => {
  return (
    <div className="card-field">
      <div className="field-label">IconPath</div>
      <div className="field-value">{cardIconPath}</div>
    </div>
  );
};

export default IconPathField;
