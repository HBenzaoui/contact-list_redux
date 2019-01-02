import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_CONTACTS } from '../../actions/types';

class ContactList extends Component {
  componentDidMount() {
    this.props.getContactList();
  }

  render() {
    const { contactList } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-info">Contact</span> List
        </h1>
        {contactList.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

ContactList.PropTypes = {
  contactList: PropTypes.array.isRequired,
  getContactList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contactList: state.contact.contactList
});

const mapDispatchToProps = dispatch => ({
  getContactList: () => dispatch({ type: GET_CONTACTS })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
