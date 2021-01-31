import React from "react";
import "./add-contact.css";

const AddContact = ({ addContact }) => {
  return (
    <div className="add-contact-container">
      <div className="add-btn" onClick={addContact}>
        +
      </div>
    </div>
  );
};

export default AddContact;
