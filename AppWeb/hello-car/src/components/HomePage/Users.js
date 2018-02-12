import React, { Component } from 'react';


class Users extends Component {

	constructor(props, context){
		super(props, context);
		this.state = {
			data:[],
			api: false,
			error: null
		}
		this.showUsers =  this.showUsers.bind(this)
	}

	componentWillMount() {
		this.showUsers();
	}

	render() {

		const {error} = this.state

		if (error){
	      return (
	      	<div>
		        <span>Usuarios no disponibles</span>
		        <p>Motivo: {error.message}</p>
		    </div>
	      )
	    }else{
		return (
			<div className="Users">
				<h3>Usuarios</h3>
				
				<div>
                    <ul>
                      {this.state.data.map(function (data) {
                          return  <li key={data.id}>NOMBRE: {data.name} USUARIO: {data.username} CORREO: {data.email}</li>  
                      })}
                    </ul>
                </div>
			</div>
		);}
	}

	showUsers(){
		fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        data: data,
                        api: true
                    });
                },
                (error) => {
                	console.log('error',error);
                    this.setState({
                        data:'',
                        api: false,
                        error
                    });


                }
            )
	}
}

export default Users;