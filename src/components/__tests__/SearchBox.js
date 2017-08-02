import React from 'react';
import ReactDOM from 'react-dom';

import SearchBox from '../SearchBox';

it('SearchBox', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBox value={''} onQueryChange={() => {}} />, div);
});
