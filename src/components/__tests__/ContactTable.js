import React from 'react';
import ReactDOM from 'react-dom';

import ContactTable from '../ContactTable';

it('ContactTable render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactTable contacts={[]} query={''} />, div);
});

it('ContactTable filtering', () => {
  const contacts = [
    { name: 'First Name', phone: '+569 5555 55555' },
  ];
  const div = document.createElement('div');
  ReactDOM.render(<ContactTable contacts={contacts} query={'second'} />, div);
});
