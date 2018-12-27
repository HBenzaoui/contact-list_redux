import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

export class ContactList extends Component {
  deleteContact = id => {
    const { contactList } = this.state;
    const newContactList = contactList.filter(contact => contact.id !== id);
    this.setState({
      contactList: newContactList
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contactList } = value;
          return (
            <React.Fragment>
              {contactList.map(contact => (
                <Contact
                  deleteClickhandler={this.deleteContact.bind(this, contact.id)}
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactList;
