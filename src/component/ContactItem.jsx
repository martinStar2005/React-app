function ContactItem({ contact, deleteContact }) {
  return (
    <li key={contact.id}>
      <p>
        {contact.fName} {contact.lName}
      </p>
      <p>📧 {contact.email}</p>
      <p>📞 {contact.telephonNumber}</p>
      <button onClick={() => deleteContact(contact.id)}>🗑️</button>
    </li>
  );
}

export default ContactItem;
