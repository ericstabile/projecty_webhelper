import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavigation from "./Navigation/AppNavigation";
import HomePage from "./HomePage/HomePage";
import InventoryServiceMainPage from "./Inventory/InventoryServiceMainPage/InventoryServiceMainPage";
import AddNewInventoryObjectPage from "./Inventory/AddNewInventoryObjectPage/AddNewInventoryObjectPage";
import ExperimentalPage from "./Experimental/ExperimentalPage";
import SpriteSheetServiceComponent from "./SpritesheetService/SpriteSheetServiceComponent";
import ModifierServiceMainPage from "./Modifiers/ModifierServiceMainPage";
import AddModifierPage from "./Modifiers/Add/AddModifierPage";
import EnumServiceComponent from "./EnumService/EnumServiceComponent";
import { AppProvider } from "./GlobalComponents/Providers/AppProvider";
import { InventoryProvider } from "./GlobalComponents/Providers/InventoryProvider";
import { ModifierProvider } from "./GlobalComponents/Providers/ModifierProvider";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <AppNavigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projecty_webhelper/*" element={<HomePage />} />
            <Route
              path="/inventory"
              element={
                <InventoryProvider>
                  <InventoryServiceMainPage />
                </InventoryProvider>
              }
            />
            <Route
              path="/add"
              element={
                <InventoryProvider>
                  <AddNewInventoryObjectPage />
                </InventoryProvider>
              }
            />
            <Route path="/experimental" element={<ExperimentalPage />} />
            <Route path="/sprite" element={<SpriteSheetServiceComponent />} />
            <Route path="/enum" element={<EnumServiceComponent />} />
            <Route
              path="/modifierService"
              element={
                <ModifierProvider>
                  <ModifierServiceMainPage />
                </ModifierProvider>
              }
            />
            <Route
              path="/addNewModifier"
              element={
                <ModifierProvider>
                  <AddModifierPage />
                </ModifierProvider>
              }
            />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
