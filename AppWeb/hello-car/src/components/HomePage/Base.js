import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Base extends Component {
  render() {
  	const {loggedIn, loggedOut} = this.props

  	if (loggedIn === true && loggedOut == false){
      return (
        <div className="Base">
	        <Header/>
	        <Content/>
	    </div>
        
      )
    }
    if(loggedOut === true){
      return (
        <div>
          <h3>Debe autenticarse primero </h3>
          <br/>
          <h4><Link to='/login'>Login</Link></h4>          
        </div>
    );
    }

    return (
        <div>
          <h3>Debe autenticarse primero </h3>
          <br/>
          <h4><Link to='/login'>Login</Link></h4>          
        </div>
    );
  }
}

const mapStateToProps = (state) => {
	//console.log('desde Base', state.loginReducers.loggedIn);
    return {
      loggedIn: state.loginReducers.loggedIn,
      loggedOut: state.logoutReducers.submittedOut
    };
}

export default connect(mapStateToProps)(Base);
