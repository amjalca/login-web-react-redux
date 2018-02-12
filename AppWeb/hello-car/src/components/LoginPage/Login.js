import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Login extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			username: '',
			password: '',
			submitted: false,
			success: false
		};

		this.handleLogin = this.handleLogin.bind(this);
	}

  render() {
  	const {loggedIn} = this.props

  	if (loggedIn === true){
      return (
        <Redirect to='/'/>

      )
    }

    return (

      <div className="Login">
        <div className="Ingreso">
        	<form name="form" onSubmit = {this.handleLogin}>
        		<p>
        			<label>Usuario: </label>
					<input ref="username" size="15" type="text" onChange={ev => this.setState({username: ev.target.value})} value={this.state.username}/>
		        </p>
		        <p>
		        	<label>Password: </label>
		        	<input ref="password" size="15" type="password" onChange={ev => this.setState({password: ev.target.value})} value={this.state.password}/>
		        </p>
		        <p>
	        		<button type="submit" >Ingresar</button>
	        	</p>
	        </form>
        </div>
      </div>
    );
  }

	handleLogin(e) {
		e.preventDefault();

		this.setState({ submitted: true })

		let username = this.refs.username.value;
		let password = this.refs.password.value;

		console.log(username);
		this.props.dispatch(login(username, password));

		this.setState({
          username: '',
          password: ''
        });
	}
}

const mapStateToProps = (state) => {
	//console.log('state.loginReducers', state.loginReducers.loggedIn);
    return {
      loggedIn: state.loginReducers.loggedIn
    };
}


export default connect(mapStateToProps)(Login);