import React from 'react';
import ReactDOM from 'react-dom';

import ContactTable from '../ContactTable';

it('ContactTable', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactTable contacts={[]} query={''} />, div);
});
