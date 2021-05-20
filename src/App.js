import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

function App() {
  return (
    <Grommet theme={hpe} style={{ height: '100%', width: 'auto' }} full>
        Hello, World!
    </Grommet>
  );
}

export default App;
