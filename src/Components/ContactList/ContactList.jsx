import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}
