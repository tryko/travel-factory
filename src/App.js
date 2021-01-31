import React, { useState } from "react";

import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import EditPanel from "./components/EditPanel/EditPanel";
import { initState, defualtContact } from "./state";

function App() {
  const [contacts, setContacts] = useState(initState);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [indexOfContactToEdit, setIndexOfContactToEdit] = useState(
    contacts.length - 1,
  );

  // handle delete of contacts
  const handleDelete = (id) => {
    setContacts((prevcontacts) =>
      prevcontacts.filter((item) => item.id !== id),
    );
  };

  // handle save checks if there is a selected contact, if not it will add the contact.
  const handleSave = (itemToSave) => {
    console.log(itemToSave);
    if (indexOfContactToEdit === -1) {
      setContacts([...contacts, itemToSave]);
    } else {
      contacts[indexOfContactToEdit] = itemToSave;
      setContacts([...contacts]);
    }

    setContactToEdit(null);
    setIndexOfContactToEdit(-1);
  };

  // takes the index of the selected contact so it can replace the contact.
  const handleSelectToEdit = (id) => {
    const index = contacts.findIndex((contact) => contact.id === id);
    console.log(contacts[index]);
    setIndexOfContactToEdit(index);
    setContactToEdit(contacts[index]);
  };

  const addContact = () => {
    setContactToEdit(defualtContact);
  };

  return (
    <div className="App">
      <ContactList
        contacts={contacts}
        handleDelete={handleDelete}
        handleSelectToEdit={handleSelectToEdit}
        addContact={addContact}
      />
      {contactToEdit && (
        <EditPanel contactToEdit={contactToEdit} handleSave={handleSave} />
      )}
    </div>
  );
}

export default App;
