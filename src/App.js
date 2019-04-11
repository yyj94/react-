import React, { Component } from 'react';
import './App.css';
import CommentApp from './components/comment/CommentApp'
import Index from './components/Index'
import Post from './components/context/Post'


class App extends Component {

  render() {
    return (
      <div className="App">
        <CommentApp />
        {/* <Index /> */}
        {/* <Post /> */}
      </div>
    );
  }
}

export default App;
