import React, { useState, useContext, useEffect } from "react";
import { MDBBtn } from "mdbreact";
import ContactContext from "../../context/contact/contactContext";
import AlertContext from "../../context/alert/alertContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);
  const {
    addContact,
    updateContact,
    current,
    clearCurrent,
    error
  } = contactContext;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    if (current === null) {
      setContact({
        name: "",
        email: "",
        phone: ""
      });
    } else {
      setContact(current);
    }
  }, [contactContext, current]);

  useEffect(() => {
    if (error) {
      alertContext.setAlert(error, "danger");
    }
    // eslint-disable-next-line
  }, [error]);

  const { name, email, phone} = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = e => {
    e.preventDefault();

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-center mb-4">Add Contact</h2>
      <label htmlFor="name" className="grey-text">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="form-control"
        value={name}
        onChange={onChange}
      />
      <br />
      <label htmlFor="email" className="grey-text">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        value={email}
        onChange={onChange}
      />
      <br />
      <label htmlFor="phone" className="grey-text">
        Phone
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        className="form-control"
        value={phone}
        onChange={onChange}
      />
      <br />
      <div className="text-center mt-4">
        <MDBBtn color="unique" type="submit" className="btn-block">
          {current ? "Update Contact" : "Add Contact"}
        </MDBBtn>
      </div>
      {current && (
        <div className="text-center mt-2">
          <MDBBtn
            color="light"
            type="submit"
            className="btn-block"
            onClick={clearAll}
          >
            Clear All
          </MDBBtn>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
