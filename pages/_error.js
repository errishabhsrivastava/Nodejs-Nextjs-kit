// pages/_error.js

import React from 'react';

const CustomErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</h1>
      <p>Sorry, something went wrong.</p>
    </div>
  );
};

export default CustomErrorPage;
