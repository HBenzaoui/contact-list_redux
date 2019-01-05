import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //check for error
    if (name === '') {
      this.setState({
        errors: {
          name: 'Name is required'
        }
      });
      return;
    }
    if (email === '') {
      this.setState({
        errors: {
          email: 'Email is required'
        }
      });
      return;
    }
    if (phone === '') {
      this.setState({
        errors: {
          phone: 'Phone is required'
        }
      });
      return;
    }
    const { id } = this.props.match.params;

    const updatedContact = {
      id,
      name,
      email,
      phone
    };

    //TODO: update contact
    this.props.updateContact(updatedContact);

    //Clear state(inputs)
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    //Redirect to home after adding
    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              value={name}
              onChange={this.handleChange}
              error={errors.name}
            />

            <TextInputGroup
              label="Email"
              name="email"
              value={email}
              type="email"
              onChange={this.handleChange}
              error={errors.email}
            />
            <TextInputGroup
              label="Phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
              error={errors.phone}
            />
            <input
              className="btn btn-success btn-block"
              type="submit"
              value="Update Contact"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contact: state.contact.contact
});

export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContact);
