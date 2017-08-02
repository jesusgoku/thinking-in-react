import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const contacts = [
    { name: 'First Person', phone: '+569 5555 5555' },
  ];
  const div = document.createElement('div');
  ReactDOM.render(<App contacts={contacts} />, div);
});
