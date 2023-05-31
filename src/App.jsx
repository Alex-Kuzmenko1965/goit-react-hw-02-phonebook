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

  getContactsBySearchQuery = ({ target }) => {
    const searchQuery = target.value;    
    const normalizedSearchQuery = searchQuery.toLowerCase();
    this.setState({filter: searchQuery});
    const filteredContacts = this.state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedSearchQuery));
    this.setState({...this.state.filter, filteredContacts})
    console.log(filteredContacts);
    return filteredContacts;
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
      filteredContacts = {this.filteredContacts}   
      getContactsBySearchQuery = {this.getContactsBySearchQuery}
      deleteContact = {this.deleteContact} />      
      {(this.state.filter === '') ? (<><p>No matches found</p>
      <ContactList 
      contacts = {this.state.contacts}
      deleteContact = {this.deleteContact} /></>) : (<ContactList 
      contacts = {this.state.filteredContacts}
      deleteContact = {this.deleteContact} />)      
      }      
    </div>
  );}
}
