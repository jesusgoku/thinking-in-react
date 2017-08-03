import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactRow from './ContactRow';
import ContactRowAction from './ContactRowAction';
import ContactHeader from './ContactHeader';


class ContactTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: null,
      sortAsc: true,
    };

    this.handleContactsSort = this.handleContactsSort.bind(this);
  }

  handleContactsSort(sortBy) {
    this.setState(prevState => ({
      sortBy,
      sortAsc: prevState.sortBy === sortBy ? !prevState.sortAsc : true,
    }));
  }

  render() {
    const { contacts, query, onContactRemove } = this.props;
    const { sortBy, sortAsc } = this.state;

    let filteredContacts = query !== ''
      ? contacts.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
      : contacts;

    if (sortBy) {
      filteredContacts = filteredContacts.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
      if (!sortAsc) {
        filteredContacts = filteredContacts.reverse();
      }
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <ContactHeader sortBy={sortBy} sortAsc={sortAsc} name="name" onContactsSort={this.handleContactsSort}>Name</ContactHeader>
            <ContactHeader sortBy={sortBy} sortAsc={sortAsc} name="phone" onContactsSort={this.handleContactsSort}>Phone</ContactHeader>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{filteredContacts.map((item, index) => (
          <ContactRow
            {...item}
            key={index}
            actions={<ContactRowAction onContactRemove={() => onContactRemove(index)} />} />
        ))}</tbody>
      </table>
    );
  }
}

ContactTable.propTypes = {
  query: PropTypes.string,
  contacts: PropTypes.array,
  onContactRemove: PropTypes.func,
};

export default ContactTable;
