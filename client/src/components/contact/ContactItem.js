import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import {
  MDBCard,
  MDBBtn,
  MDBBadge,
  MDBCardBody,
  MDBFormInline
} from "mdbreact";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { setCurrent, deleteContact, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;
  return (
    <ul>
        <li >
          Name: {name}{" "}
        </li>
        <ul>
        <li>
           Email: {email}
        </li>
        <li>
           Phone: {phone}
        </li> 
        </ul>
    </ul>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
