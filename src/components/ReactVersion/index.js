import React from 'react';

const REACT_VERSION = React.version;

export default () => {
  return (
    <div>
      React Version: &nbsp; 
      {REACT_VERSION}
    </div>
  );
};
