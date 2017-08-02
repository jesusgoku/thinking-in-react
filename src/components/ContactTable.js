import React from 'react';
import PropTypes from 'prop-types';

import ContactRow from './ContactRow';


const ContactTable = props => {
  const contacts = props.query !== ''
    ? props.contacts.filter(item => item.name.toLowerCase().indexOf(props.query.toLowerCase()) !== -1)
    : props.contacts;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{contacts.map(item => (
        <ContactRow {...item} />
      ))}</tbody>
    </table>
  );
}

ContactTable.propTypes = {
  query: PropTypes.string,
  contacts: PropTypes.array,
};

export default ContactTable;
