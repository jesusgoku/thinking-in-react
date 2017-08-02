import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';
import ContactTable from './ContactTable';
import ContactForm from './ContactForm';


class ContactFilterTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      contacts: props.contacts,
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleContactAdd = this.handleContactAdd.bind(this);
  }

  handleQueryChange(query) {
    this.setState({ query });
  }

  handleContactAdd(contact) {
    this.setState(prevState => ({
      contacts: prevState.contacts.concat([contact]),
    }));
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <SearchBox
          query={this.state.query}
          onQueryChange={this.handleQueryChange} />
        <ContactTable
          contacts={contacts}
          query={this.state.query} />
        <ContactForm onContactAdd={this.handleContactAdd} />
      </div>
    );
  }
}

ContactFilterTable.propTypes = {
  contacts: PropTypes.array,
};

export default ContactFilterTable;
