import React, { Component } from "react";
import ContactsEditor from "./Components/Contacts/ContactsEditor";
import ContactsList from "./Components/ContactsList/ContactList";
import Filter from "./Components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";
import Section from "./Components/Section/Section";
import styles from "./styles/main.module.css";
class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  addPhone = (name, phone) => {
    const { contacts } = this.state;
    const Contact = {
      id: uuidv4(),
      name,
      phone,
    };
    contacts.some((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => {
          return {
            contacts: [...prevState.contacts, Contact],
          };
        });
  };
  deleteContact = (ContactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (Contact) => Contact.id !== ContactId
      ),
    }));
  };
  changeFilter = (filter) => {
    this.setState({ filter });
  };
  getVisibleTask = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  render() {
    const visibleTasks = this.getVisibleTask();
    return (
      <div className={styles.container}>
        <Section title="Enter contact">
          <ContactsEditor onAddContacts={this.addPhone} />
          {this.state.contacts.length > 1 && (
            <Filter
              value={this.state.filter}
              onChangeFilter={this.changeFilter}
            />
          )}
        </Section>
        <Section title="Your contacts">
          <ContactsList
            contacts={visibleTasks}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
export default App;
