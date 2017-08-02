import React from 'react';
import ReactDOM from 'react-dom';

import ContactRow from '../ContactRow';

it('ContactRow', () => {
  const contact = { name: 'First Name', phone: '+569 5555 5555' };
  const tbody = document.createElement('tbody');
  ReactDOM.render(<ContactRow {...contact} />, tbody);
});
