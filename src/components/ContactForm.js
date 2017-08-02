import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onContactAdd({
      name: this.name.value,
      phone: this.phone.value,
    });

    this.name.value = '';
    this.phone.value = '';
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="sr-only">Name</label>
          <input type="text" name="name" className="form-control" placeholder="Name" required ref={input => { this.name = input; }} />
        </div>
        &nbsp;
        <div className="form-group">
          <label className="sr-only">Phone</label>
          <input type="text" name="phone" className="form-control" placeholder="Phone" required ref={input => { this.phone = input; }} />
        </div>
        &nbsp;
        <button type="submit" className="btn btn-primary"><i className="fa fa-plus" /> Add</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onContactAdd: PropTypes.func.isRequired,
};

export default ContactForm;
