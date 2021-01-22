import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class Form extends Component {
  state = { name: '', number: '' };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    console.log(name, number);
    if (name && number) {
      this.props.onSubmit(this.state);
    }

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log({ name, value });
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
