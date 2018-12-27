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
