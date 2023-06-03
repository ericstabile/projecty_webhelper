import React from "react";
import ReactDOM from "react-dom";
import "./ModalComponent.css";
import { RiCloseFill } from "react-icons/ri";

const ModalComponent = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal-button" onClick={onClose}>
          <RiCloseFill />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalComponent;
