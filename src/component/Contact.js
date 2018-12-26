import React from 'react';

const Contact = props => {
  return (
    <div>
      <h3>Name:{props.name}</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

export default Contact;
