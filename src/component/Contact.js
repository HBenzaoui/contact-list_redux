import React from 'react';

const Contact = props => {
  const { name, email, phone } = props;
  return (
    <div>
      <h4 className="card card-body mb-1">Name: {name}</h4>
      <ul className="list-group mb-3">
        <li className="list-group-item">
          <p>Email: {email}</p>
        </li>
        <li className="list-group-item">
          <p>Phone: {phone}</p>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
