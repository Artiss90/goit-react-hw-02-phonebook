import { number } from 'prop-types';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

/* eslint react/prop-types: 1 */

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
  };
  nameInputId = uuidv4();
  numberInputId = uuidv4();

  addContact = ({ name, number }) => {
    const phoneContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [phoneContact, ...contacts],
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    //  const {name, number} = this.state
    console.log(this.state);
    this.addContact(this.state);

    // this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log({ name, value });
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <h2>Phonebook</h2>
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
          <ul>
            <h2>Contacts</h2>
            {contacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </form>
      </>
    );
  }
}

export default App;
