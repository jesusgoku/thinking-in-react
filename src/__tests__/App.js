import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  const contacts = [
    { name: 'First Person', phone: '+569 5555 5555' },
  ];
  const div = document.createElement('div');
  ReactDOM.render(<App contacts={contacts} />, div);
});

it('renders without crashing', () => {
  const contacts = [
    { name: 'First Person', phone: '+569 5555 5555' },
  ];
  shallow(<App contacts={contacts} />);
});
