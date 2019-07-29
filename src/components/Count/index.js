import React, { useState } from 'react';

export default () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div id="count-container">
      <button id="count-button" type="button" onClick={() => setCount(count + 1)}>
        You clicked &nbsp;
        {count}
        &nbsp; times
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
