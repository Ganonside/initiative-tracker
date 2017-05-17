import React from 'react';
import ReactDOM from 'react-dom';

import Tracker from './Tracker';

describe('TrackerComponent', () => {
  const rootDiv = document.createElement('div');

  it('Should render without crashing', () => {
    ReactDOM.render(<Tracker />, rootDiv);
  });
});
