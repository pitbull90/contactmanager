import React from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends React.Component {
  deleteContact = id => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contacts => contacts.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
