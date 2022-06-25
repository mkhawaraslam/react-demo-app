import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import AddContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const retrievedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
  const contactsList = retrievedContacts ? JSON.parse(retrievedContacts) : [];
  const [contacts, setContacts] = useState(contactsList);

  const contactHandler = (contact) => {
    setContacts([...contacts, contact])
  }

  // TODO: here data is not fecthing on page reload.
  // useEffect(() => {
  //   const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrievedContacts) setContacts(retrievedContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact contactHandler={contactHandler} />
      <AddContactList contacts={contacts} />
    </div>
  );
}

export default App;
