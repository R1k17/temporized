import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const navObj = {
  signIn: "Sign in",
  signOut: "Sign out"
}

// later insert the navbar its own component
function NavigationBar(props) {
  return (
    <nav>
      {/* <h1 className="App-title">temporized</h1> */}
      <h1 className="App-title">{props.title}</h1>
      <ul>
        <li>{props.links.signIn}</li>
        <li>{props.links.signOut}</li>
      </ul>
    </nav>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar title="temporiezd" links={navObj}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
