import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts;
    
    return <ol>
      {people.map(person => (
       <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Edvan' },
          { name: 'Kukinha' },
          { name: 'Mili' },
          { name: 'Lisandra' }
        ]}/>
        <ContactList contacts={[
          { name: 'Michael' },
          { name: 'Tyler' },
          { name: 'Ryan' },
          { name: 'Geoff' }
        ]}/>
      </div>
    );
  }
}

export default App;
