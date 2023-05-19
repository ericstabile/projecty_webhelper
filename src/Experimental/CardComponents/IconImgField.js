import React from 'react';

const IconImgField = ({cardIconImg}) => {
  return (
    <div className="card-field">
      <div className="field-label">Icon Image</div>
      <div className="field-value">
        <img src="icon/path.png" alt="Item Icon" />
      </div>
    </div>
  );
};

export default IconImgField;
