import React from 'react';

function Tweet({ name, message }) {
  return (
    <div className='tweet'>
      <h3>{name}</h3>
      <p>
        <strong>{message}</strong>
      </p>
      <h3>Number of likes</h3>
    </div>
  );
}

export default Tweet;
