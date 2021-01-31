import React, { useState, useEffect } from "react";

import "./edit-panel.css";
import { v4 as uuidv4 } from "uuid";

const EditPanel = ({ contactToEdit, handleSave }) => {
  const [editedItem, setEditedItem] = useState(contactToEdit);

  useEffect(() => {
    // the API doesn't work. I'm guessing the key is invalid?
    fetch(
      " https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8",
    )
      .then((data) => data.json())
      .then((data) => console.log(data));
  }, [contactToEdit]);

  // id is taken from the target and used to give the property name
  const handleChange = (e) => {
    const { value, id } = e.target;
    setEditedItem((prevItem) => ({ ...prevItem, id: uuidv4(), [id]: value }));
  };

  return (
    <div className="edit-panel-container">
      <div className="edit-panel">
        <button
          className="close-btn"
          aria-label="Close modal"
          onClick={() => handleSave(contactToEdit)}
        >
          X
        </button>
        <h4>{editedItem.name} details</h4>
        <img src={editedItem.imgSrc} alt="" />
        <div>
          Name: <br />
          <input id="name" value={editedItem.name} onChange={handleChange} />
        </div>
        <div>
          street: <br />
          <input
            id="street"
            value={editedItem.street}
            onChange={handleChange}
          />
        </div>
        <div>
          country: <br />
          <input
            id="country"
            value={editedItem.country}
            onChange={handleChange}
          />
        </div>
        <div>
          phone: <br />
          <input
            className="phone-ext"
            id="phone.ext"
            type="number"
            value={editedItem.phone.ext}
            onChange={handleChange}
          />
          <input
            id="phone.num"
            type="number"
            value={editedItem.phone.num}
            onChange={handleChange}
          />
        </div>
        <button
          className="save-btn"
          aria-label="Save"
          onClick={() => handleSave(editedItem)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditPanel;
