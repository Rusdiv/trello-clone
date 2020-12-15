import React from 'react';
import ColorPicker from './componets/ColorPicker';

import ListsContainer from './componets/ListsContainer';

function App(props) {
  return (
    <div>
      <ListsContainer />
      <ColorPicker />
    </div>
  );
}

export default App;
