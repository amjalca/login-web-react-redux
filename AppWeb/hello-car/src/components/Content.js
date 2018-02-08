import React, { Component } from 'react';
import Tabla from './Tabla.js'

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="Usuarios">
          <Tabla/>
        </div>
      </div>
    );
  }
}

export default Content;
