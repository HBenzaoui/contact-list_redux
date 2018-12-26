import React, { Component } from 'react';
import Header from './component/Header';
import ContactList from './component/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header branding="Contact Manager" />
        <div className="container">
          <ContactList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
