import { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactList/ContactList';
import FilterName from './Components/FilterName/FilterName';
import style from './App.module.css';

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

  addContact = ({ name, number }) => {
    console.log({ name, number });
    const { contacts } = this.state;
    /**создаём новый контакт и присвоим ему ID  */
    const phoneContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    /**проверка на повторение имён */
    if (contacts.find(contactPhone => contactPhone.name === name)) {
      console.log(`Повторяющееся имя ${name}`);
      alert(`${name} is already in contacts!`);
      return;
    }
    /**добавляем новый контакт в в состояние контактов */
    this.setState(({ contacts }) => ({
      contacts: [phoneContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contactPhone =>
      contactPhone.name.toLowerCase().includes(normalizedFilter),
    );
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contactPhone => contactPhone.id !== contactId,
      ),
    }));
  };

  render() {
    console.log(style);
    return (
      <>
        <h2 className={style.title}>Phonebook</h2>
        <Form onSubmitForm={this.addContact}></Form>
        <FilterName value={this.state.filter} onChange={this.changeFilter} />
        <h2 className={style.title + ' ' + style.center}>Contacts</h2>
        <ContactList
          contacts={this.getVisibleContacts()}
          onClickDelete={this.onDeleteContact}
        />
      </>
    );
  }
}

export default App;
