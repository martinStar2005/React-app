import styles from "./ContactItem.module.css";

function ContactItem({ contact, deleteContact }) {
  return (
    <li className={styles.container} key={contact.id}>
      <p className={styles.fullname}>
        {contact.fName} {contact.lName}
      </p>
      <p className={styles.email}>
        <span>📧</span> {contact.email}
      </p>
      <p className={styles.phone}>
        <span>📞</span> {contact.telephonNumber}
      </p>
      <button
        className={styles.remove}
        onClick={() => deleteContact(contact.id)}
      >🗑️
      </button>
    </li>
  );
}

export default ContactItem;
