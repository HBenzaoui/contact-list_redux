import React from 'react';

const NotFound = () => {
  return (
    <React.Fragment>
      <h1 className="display-4">
        <span className="text-danger">404 Page not Found</span>
      </h1>
      <p className="lead">Sorry, that page does not exist</p>
    </React.Fragment>
  );
};

export default NotFound;
