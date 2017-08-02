import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(e) {
    this.props.onQueryChange(e.target.value);
  }

  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only">Search</label>
          <input type="text" name="query" className="form-control" placeholder="Search" value={this.props.value} onChange={this.handleQueryChange} />
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchBox;
