import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const contacts = [];

ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));
registerServiceWorker();
