import React, { Component } from 'react';
import Form from '../components/Form';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Searching Flickr for: ' + this.state.value);
    
    event.preventDefault();

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Search by tag(s):</p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}

export { Search };