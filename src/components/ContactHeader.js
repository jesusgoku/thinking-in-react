import React from 'react';
import PropTypes from 'prop-types';

import './ContactHeader.css';

const ContactHeader = props => (
  <th onClick={() => props.onContactsSort(props.name)} className="ContactHeader">
    {props.children}
    &nbsp;
    {props.sortBy === props.name ? <i className={`fa fa-sort-${props.sortAsc ? 'asc' : 'desc'}`} /> : ''}
  </th>
);

ContactHeader.propTypes = {
  sortBy: PropTypes.string,
  sortAsc: PropTypes.bool,
  onContactsSort: PropTypes.func,
};

export default ContactHeader;
