import ContactItem from "./ContactItem.jsx";

function Contacts({ contacts }) {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.length ? (
          contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <p>No contact in list</p>
        )}
      </ul>
    </div>
  );
}

export default Contacts;
