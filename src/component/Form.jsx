import { useState } from "react";
import Contacts from "./Contacts";
import inputs from "../constants/inpus.js";

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
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={form[input.name]}
            onChange={setTheFormInput}
          />
        ))}
      </div>

      <button onClick={submit}>Save</button>
      <div>{alert && <p>{alert}</p>}</div>
      <Contacts contacts={contacts} />
    </div>
  );
}
