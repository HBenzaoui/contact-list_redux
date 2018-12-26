import React, { Component } from 'react';

class Contact extends Component {
  state = {
    showDetails: false
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showDetails } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            className="fas fa-sort-down"
            onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              });
            }}
          />
        </h4>
        {showDetails ? (
          <ul className="list-group">
            <li className="list-group-item">
              <p>Email: {email}</p>
            </li>
            <li className="list-group-item">
              <p>Phone: {phone}</p>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
