import React from "react";

const ContactCard = (props) => {
  const {id, name, email} = props.contact;

  return (
    <div className="item list-card" key={id}>
      <div className="content card-content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon trash-btn"></i>
    </div>
  );
}

export default ContactCard;
