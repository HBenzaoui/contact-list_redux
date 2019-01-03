import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContactList } from '../../actions/contactActions';

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

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  getContactList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contactList: state.contact.contactList
});

export default connect(
  mapStateToProps,
  { getContactList }
)(ContactList);
