import React, { Component } from 'react';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Content from './Components/Content'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <SideBar/>
        <Content/>
      </div>
    );
  }
}

export default App;
