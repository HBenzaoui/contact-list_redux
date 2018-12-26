import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  state = {
    showDetails: false
  };

  handleDeleteBtn = () => {
    this.props.deleteClickhandler();
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
            style={{ cursor: 'pointer' }}
            onClick={() => {
              this.setState({
                showDetails: !this.state.showDetails
              });
            }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
            onClick={this.handleDeleteBtn}
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

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickhandler: PropTypes.func.isRequired
};

export default Contact;
