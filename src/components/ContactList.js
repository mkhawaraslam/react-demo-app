import React from "react";
import ContactCard from "./ContactCard";

const AddContactList = (props) => {
  const renderContactsList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} />
    );
  });

  return (
    <div className="ui celled list">
      {renderContactsList}
    </div>
  );
}

export default AddContactList;
