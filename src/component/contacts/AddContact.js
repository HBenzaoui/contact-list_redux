import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
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

  handleSubmit = (dispatch, e) => {
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

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

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
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
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
                    className="btn btn-info btn-block"
                    type="submit"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
