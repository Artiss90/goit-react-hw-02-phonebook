import { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';

/* eslint react/prop-types: 1 */

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  // nameInputId = uuidv4();
  // numberInputId = uuidv4();

  addContact = ({ name, number }) => {
    console.log({ name, number });
    const phoneContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    // console.log(!!name);
    this.setState(({ contacts }) => ({
      contacts: [phoneContact, ...contacts],
    }));
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   //  const {name, number} = this.state
  //   console.log(this.state);
  //   this.addContact(this.state);

  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   console.log({ name, value });
  //   this.setState({ [name]: value });
  // };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact}></Form>
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts}></ContactList>
      </>
    );
  }
}

export default App;
