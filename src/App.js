import React, { Component } from 'react';
import Header from './component/layout/Header';
import About from './component/pages/About';
import ContactList from './component/contacts/ContactList';
import AddContact from './component/contacts/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ContactList} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
