import React from 'react';
import PropTypes from 'prop-types';


const ContactRowAction = props => (
  <div className="btn-group">
    <button className="btn btn-link" onClick={props.onContactRemove}>
      <i className="fa fa-trash" /> <span className="sr-only">delete</span>
    </button>
  </div>
);

ContactRowAction.propTypes = {
  onContactRemove: PropTypes.func,
};



export default ContactRowAction;
