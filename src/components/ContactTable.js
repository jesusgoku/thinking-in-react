import React from 'react';
import PropTypes from 'prop-types';

import ContactRow from './ContactRow';
import ContactRowAction from './ContactRowAction';


const handleContactRemove = (cb, index) => () => {
  cb(index);
}

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{contacts.map((item, index) => (
        <ContactRow
          {...item}
          key={index}
          actions={<ContactRowAction onContactRemove={handleContactRemove(props.onContactRemove, index)} />} />
      ))}</tbody>
    </table>
  );
}

ContactTable.propTypes = {
  query: PropTypes.string,
  contacts: PropTypes.array,
  onContactRemove: PropTypes.func,
};

export default ContactTable;
