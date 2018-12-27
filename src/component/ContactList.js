import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class ContactList extends Component {
  render() {
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
  }
}

export default ContactList;
