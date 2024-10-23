import ContactItem from "./ContactItem.jsx";

function Contacts({ contacts, deleteContact }) {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.length ? (
          contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
          ))
        ) : (
          <p>No contact in list</p>
        )}
      </ul>
    </div>
  );
}

export default Contacts;
