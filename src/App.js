import React, { Component } from 'react';
import './App.css';
import CommentApp from './components/comment/CommentApp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentApp />
      </div>
    );
  }
}

export default App;
