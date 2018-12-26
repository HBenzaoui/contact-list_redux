import React, { Component } from 'react';
import Header from './component/Header';
import ContactList from './component/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
