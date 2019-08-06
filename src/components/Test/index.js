import React from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles

const Test = () => (
  <button
    onClick={() => {
      toaster.notify('Hello world', {
        duration: 2000,
      });
    }}
  >
    Say hello
  </button>
);

export default Test;
