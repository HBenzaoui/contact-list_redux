import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showDetails: false
  };

  handleDeleteBtn = () => {};

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showDetails } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  className="fas fa-times "
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.handleDeleteBtn.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-edit "
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'green',
                      marginRight: '2rem'
                    }}
                  />
                </Link>
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
