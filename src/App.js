import React, { Component } from 'react';
import Header from './component/layout/Header';
import ContactList from './component/contacts/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <React.Fragment>
          <Header branding="Contact Manager" />
          <div className="container">
            <ContactList />
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
