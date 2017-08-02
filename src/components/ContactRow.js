import React from 'react';
import PropTypes from 'prop-types';

const ContactRow = props => (
  <tr>
    <td><i className="fa fa-user" /> {props.name}</td>
    <td><i className="fa fa-mobile" /> {props.phone}</td>
  </tr>
);

ContactRow.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default ContactRow;
