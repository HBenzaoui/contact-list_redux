import React, { Component } from 'react';
import Header from './component/Header';
import Contact from './component/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Contact Manager" />
        <Contact
          name="Hamza"
          email="Hamzapdd@gmail.com"
          phone="0661 45 81 97"
        />
      </div>
    );
  }
}

export default App;
