import ContactItem from "./ContactItem.jsx";
import styles from "./ContactList.module.css"

function Contacts({ contacts, deleteContact }) {
  console.log(contacts);
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      <ul className={styles.contacts}>
        {contacts.length ? (
          contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
          ))
        ) : (
          <p className={styles.message}>No contact in list</p>
        )}
      </ul>
    </div>
  );
}

export default Contacts;
