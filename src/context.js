import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contactList: state.contactList.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
