import { useState } from "react";
import Contacts from "./Contacts";

export default function Form() {
  

  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    telephonNumber: "",
  });

  const setTheFormInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  };

  const submit = () => {
    if (!form.fName || !form.lName || !form.email || !form.telephonNumber) {
      setAlert("Please inter a valid input");
      return;
    }
    setAlert("");
    setContacts((contact) => [...contact, form]);
    setForm({ fName: "", lName: "", email: "", telephonNumber: "" });
  };

  return (
    <div>
      <input
        type="text"
        name="fName"
        value={form.fName}
        onChange={setTheFormInput}
      />
      <input
        type="text"
        name="lName"
        value={form.lName}
        onChange={setTheFormInput}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={setTheFormInput}
      />
      <input
        type="text"
        name="telephonNumber"
        value={form.telephonNumber}
        onChange={setTheFormInput}
      />
      <button onClick={submit}>Save</button>
      <div>{alert && <p>{alert}</p>}</div>
      <Contacts contacts={contacts} />
    </div>
  );
}
