import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';


class Base extends Component {
  render() {
    return (
      <div className="Base">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default Base;
