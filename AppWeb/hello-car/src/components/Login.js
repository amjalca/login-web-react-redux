import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Ingreso">
        	<form>
        		<p>
					<input
						size="15"
						placeholder="frodo"
					/>
		        </p>
		        <p>
		        	<input
						size="15"
						type="password"
					/>
		        </p>
		        <p>
	        		<button type="submit">Ingresar</button>
	        	</p>
	        </form>
        </div>
      </div>
    );
  }
}

export default Login;