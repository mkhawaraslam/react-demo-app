import React from "react";

const ContactCard = (props) => {
  const {id, name, email} = props.contact;

  return (
    <div key={id} className="item list-card">
      <div className="content card-content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon trash-btn"
        onClick={() => {props.contactHandler(id)}}
      ></i>
    </div>
  );
}

export default ContactCard;
