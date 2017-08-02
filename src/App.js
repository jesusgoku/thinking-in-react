import React from 'react';
import PropTypes from 'prop-types';

import ContactFilterTable from './components/ContactFilterTable';

const App = props => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h1><i className="fa fa-address-book" /> Contacts Book</h1>
        <ContactFilterTable contacts={props.contacts} />
      </div>
    </div>
  </div>
);

App.propTypes = {
  contacts: PropTypes.array,
};

export default App;
