import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/layout/Header';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
import ContactList from './component/contacts/ContactList';
import AddContact from './component/contacts/AddContact';
import Test from './component/test/Test';

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
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
