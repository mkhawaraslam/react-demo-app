import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import AddContactList from './ContactList';

function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <AddContactList />
    </div>
  );
}

export default App;
