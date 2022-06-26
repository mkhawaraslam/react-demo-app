import React from "react";
import ContactCard from "./ContactCard";

const AddContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }
  const renderContactsList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} contactHandler={deleteContactHandler} key={contact.id} />
    );
  });

  return (
    <div className="ui celled list">
      {renderContactsList}
    </div>
  );
}

export default AddContactList;
