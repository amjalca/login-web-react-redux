import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logout">
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    );
  }
}

export default Header;
