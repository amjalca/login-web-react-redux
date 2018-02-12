import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/logoutActions';
import { connect } from 'react-redux';

class Header extends Component {

	constructor(props, context){
		super(props, context);

		this.state = {
			submittedOut: false
		};

		this.handleLogout = this.handleLogout.bind(this);
	}

  render() {
    return (
      <div className="Header">
        <div className="Logout">
          <Link to="/logout" onClick={logout()}>Logout</Link>
        </div>
      </div>
    );
  }

  handleLogout(e) {
		e.preventDefault();

		this.setState({ submittedOut: true })

		console.log('dis a logout');
		this.props.dispatch(logout(this.state.submittedOut));
	}
}

//export default Header;

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout(true))
  };
}

export default connect(mapDispatchToProps)(Header)
