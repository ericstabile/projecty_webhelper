// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { saveAs } from 'file-saver';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LoadJsonComponent from '../../GlobalComponents/LoadJsonComponent/LoadJsonComponent';
// import InventoryObjectTableComponent from '../InventoryObjectTableComponent/InventoryObjectTableComponent';
// import './InventoryServiceMainPage.css';
// import TopRowComponent from '../../GlobalComponents/TopRow/TopRowComponent';
// import { AppContext } from '../../GlobalComponents/Contexts/AppContext';
// import { InventoryContext } from '../../GlobalComponents/Contexts/InventoryContext';

// const InventoryServiceMainPage = () => {
//   const navigate = useNavigate();

//   const {
//     inventoryObjectData,
//     setInventoryObjectData,
//     assetPathList
//   } = useContext(AppContext);

//   const {
//     setLastID
//   } = useContext(InventoryContext);
  
//   const handleFileChosen = (content) => {
//     setInventoryObjectData(content);
//   };

//   const handleAddNewItem = () => {
//     navigate('/add');
//     const newID = inventoryObjectData.length > 0 ? 
//       Math.max(...inventoryObjectData.map(obj => obj.ID)) 
//       : 1;
//     setLastID(newID);
//   };

//   const handleResetState = () => {
//     setInventoryObjectData([]);
//     setLastID(0);
//   };
  
//   const handleSaveToFile = () => {
//     const jsonStr = JSON.stringify(inventoryObjectData, null, 2);
//     const blob = new Blob([jsonStr], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "inventory_object_data_v0.json");
//   }  

//   return (
//     <div className="main-container">
//       <TopRowComponent 
//         handleAddNewItem={handleAddNewItem} 
//         handleResetState={handleResetState} 
//         handleSaveFile={handleSaveToFile} 
//         nav={navigate} />
//       <LoadJsonComponent handleFileChosen={handleFileChosen} />
//       <InventoryObjectTableComponent 
//         inventoryObjectData={inventoryObjectData || []} 
//         setInventoryObjectData={setInventoryObjectData}
//         assetPathList={assetPathList} />
//     </div>
//   );
// };

// export default InventoryServiceMainPage;
