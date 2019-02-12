import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    people: [
      { name: "Tyga Montana", profession: "Rapper" },
      { name: "Metro Boomin'", profession: "Music Producer" },
      { name: "Rone", profession: "Artist/Personality" },
      { name: "Super Producer BC", profession: "Podcast Producer" }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>HEY</h1>
        {/* <button>SWITH NAME</button> */}
        <Person name="Sonny Digital" profession="Music Producer" />
        <Person name="Dan Katz" profession="Blogger" />
        <Person name="Johnny Juliano" profession="Music Producer" />
        <Person
          name={this.state.people[0].name}
          profession={this.state.people[0].profession}
        />
        <Person
          name={this.state.people[1].name}
          profession={this.state.people[1].profession}
        />
        <Person
          name={this.state.people[2].name}
          profession={this.state.people[2].profession}
        />
        <Person
          name={this.state.people[3].name}
          profession={this.state.people[3].profession}
        />
      </div>
    );
    //  return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'OKAYyY'));
  }
}

export default App;
