import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.length ? "Contacts" : null}
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}:{phone}
          </p>

          <button type="button" onClick={() => onDeleteContact(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  </>
);
ContactList.defaultProps = {
  onDeleteContact: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
