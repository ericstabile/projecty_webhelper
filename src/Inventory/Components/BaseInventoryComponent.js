import React, { useState } from 'react';

const BaseInventoryComponent = ({inventoryObject}) => {
  const [currentInventoryObject, setCurrentInventoryObject] = useState(inventoryObject);
  
  return (
    <div>
      <p>hi.</p>
    </div>
  )
};

export default BaseInventoryComponent;