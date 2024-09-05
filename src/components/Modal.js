// src/components/Modal.js
import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, title, documents, website }) => {
  if (!show) {
    return null;
  }

  const hasDocuments = documents && documents.length > 0;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <h3>Required Documents</h3>
        <ul>
          {hasDocuments ? (
            documents.map((doc, index) => <li key={index}>{doc}</li>)
          ) : (
            <li>No required documents</li>
          )}
          
        </ul>
        {/* Conditional Rendering for Website Button */}
        {website && (
            <div className="modal-footer">
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="website-button"
              >
                Visit Website
              </a>
            </div>
          )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
