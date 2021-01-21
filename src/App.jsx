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
  };

  nameInputId = uuidv4();
  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <form>
          <label htmlFor={this.nameInputId}>
            Name
            <input type="text" name="name" value={name} id={this.nameInputId} />
          </label>
          <button type="submit">Add contact</button>

          <br />
          <ul>
            <h2>Contacts</h2>
            {contacts.map(contact => (
              <li key={contact.index}>{contact}</li>
            ))}
          </ul>
        </form>
      </>
    );
  }
}

export default App;
