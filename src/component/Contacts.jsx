function Contacts({contacts}) {
  console.log(contacts);
  return (
    <div>
      <ul>
        {contacts.map((contact) => (<li key={contact.id}>{contact.fName}</li>))}
      </ul>
    </div>
  );
}

export default Contacts;
