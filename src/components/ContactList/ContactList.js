import ContactCard from "../ContactCard/ContactCard";
import AddContact from "./../AddContact/AddContact";
import "./contact-list.css";

const ContactList = ({
  addContact,
  contacts,
  handleDelete,
  handleSelectToEdit,
}) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          {...contact}
          handleDelete={handleDelete}
          handleSelectToEdit={handleSelectToEdit}
        />
      ))}
      <AddContact addContact={addContact} />
    </div>
  );
};

export default ContactList;
