import React from 'react';
import PropTypes from 'prop-types';

const ContactRow = props => (
  <tr>
    <td><i className="fa fa-user" /> {props.name}</td>
    <td><i className="fa fa-mobile" /> {props.phone}</td>
    <td>{props.actions}</td>
  </tr>
);

ContactRow.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  actions: PropTypes.object,
};

export default ContactRow;
