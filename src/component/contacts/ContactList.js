import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  state = {
    contactList: [
      {
        id: 1,
        name: 'Hamza',
        email: 'Hamzapdd@gmail.com',
        phone: '0661 45 81 97'
      },
      {
        id: 2,
        name: 'Bilal',
        email: 'bilal@gmail.com',
        phone: '0770 75 41 47'
      },
      {
        id: 3,
        name: 'Moha',
        email: 'info@yahoo.com',
        phone: '0550 00 00 00'
      }
    ]
  };

  render() {
    const { contactList } = this.state;
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
  }
}

export default ContactList;
