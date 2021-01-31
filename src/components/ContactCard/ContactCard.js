import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import "./contact-card.css";

const ContactCard = ({
  id,
  name,
  street,
  country,
  phone,
  image,
  jobTitle,
  handleDelete,
  handleSelectToEdit,
}) => {
  return (
    <div className="card">
      <div>
        <img
          className="card-img"
          src={process.env.PUBLIC_URL + `/assets/${image}.jpg`}
          alt=""
        />
        <p className="card-image-under-text">{jobTitle}</p>
      </div>
      <div>
        <p className="card-name">{name}</p>
        <p>{street}</p>
        <p>{country}</p>
        <p>
          ({phone.ext}) {phone.num}
        </p>
        <div className="card-btn-container">
          <FaEdit className="card-btn" onClick={() => handleSelectToEdit(id)} />
          <FaTrashAlt className="card-btn" onClick={() => handleDelete(id)} />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
