function ContactItem({ contact }) {
  return (
    <li key={contact.id}>
      <p>
        {contact.fName} {contact.lName}
      </p>
      <p>📧 {contact.email}</p>
      <p>📞 {contact.telephonNumber}</p>
      <button>🗑️</button>
    </li>
  );
}

export default ContactItem;
