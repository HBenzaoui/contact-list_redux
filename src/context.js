import React, { Component } from 'react';
import Axios from 'axios';

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
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [action.payload, ...state.contactList]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contactList: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users/').then(response =>
      this.setState({
        contactList: response.data
      })
    );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
