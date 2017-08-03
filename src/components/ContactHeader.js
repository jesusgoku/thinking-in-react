import React from 'react';

const ContactHeader = props => (
  <button className="btn btn-block btn-primary" onClick={props.onContactsSort}>
    {props.children}
  </button>
);

export default ContactHeader;
