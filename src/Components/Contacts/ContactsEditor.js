import React, { Component } from "react";

class ContactsEditor extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = (property) => {
    return (e) => {
      this.setState({ [property]: e.target.value });
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContacts(this.state.name, this.state.phone);

    this.setState({ name: "", phone: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name
        <input
          value={this.state.name}
          onChange={this.handleChange("name")}
        ></input>
        Phone
        <input
          value={this.state.phone}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          onChange={this.handleChange("phone")}
        ></input>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsEditor;
