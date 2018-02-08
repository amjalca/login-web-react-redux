import React, { Component } from 'react';
import Users from './Users.js'

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="Usuarios">
          <Users/>
        </div>
      </div>
    );
  }
}

export default Content;
