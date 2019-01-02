import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (dispatch, e) => {
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

    const updatedContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;

    //TODO: update contact

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

export default EditContact;
