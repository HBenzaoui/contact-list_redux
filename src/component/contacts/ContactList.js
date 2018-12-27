import React from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

const ContactList = () => {
  return (
    <Consumer>
      {value => {
        const { contactList } = value;
        return (
          <React.Fragment>
            <h1 className="display-4 mb-2">
              <span className="text-info">Contact</span> List
            </h1>
            {contactList.map(contact => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default ContactList;
