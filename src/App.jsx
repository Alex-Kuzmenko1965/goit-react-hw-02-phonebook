// import './App.css';
import React, { Component } from 'react';
import { nanoid } from "nanoid";
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''    
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };

  handleSubmit = event => {    
    event.preventDefault();
    const contactId = nanoid();
    const { name, number } = this.state;    
    const contacts = this.state.contacts;
    console.log(contacts);
    const isName = contacts.find(contact => contact.name === this.state.name);
    console.log(isName);
    if (!isName) {
      const contact = { id: contactId, name: name, number: number};
      console.log(contact);
      this.setState((prevState) => ({contacts: [...prevState.contacts, contact] }));      
      this.reset();
    } else alert(`${name} is already in contact`);   
  };  

  reset = () => {
    this.setState({
      name: '',
      number: ''
    });
  };
  
  deleteContact = contactId => {    
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  
  searchQuery = ({ target }) => {
    const searchQuery = target.value;    
    this.setState({filter: searchQuery});
    console.log(this.state.filter)
  }

  getFilteredContacts = () => {    
    if (!this.state.filter) {
      const filteredContacts = this.state.contacts;
      console.log(filteredContacts);
      return filteredContacts;
    } else {
      const filter = this.state.filter;    
      const normalizedFilter = filter.toLowerCase();
      const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter));    
      console.log(filteredContacts);
      return filteredContacts;
    }
  }

  render() {

  return (
    <div>
      <h1>Phonebook</h1>      
      <ContactForm
      handleChange = {this.handleChange}
      handleSubmit = {this.handleSubmit} />     
      <h2>Contacts</h2>
      <Filter
      filter = {this.state.filter}
      searchQuery = {this.searchQuery} />
      <ContactList
      getFilteredContacts = {this.getFilteredContacts}
      deleteContact = {this.deleteContact} />
    </div>
  );}
}
