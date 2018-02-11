import React, { Component } from 'react';
import { showUsers } from '../../actions/userActions';
import { connect } from 'react-redux';
import $ from "jquery";

class Users extends Component {

	constructor(props, context){
		super(props, context);
		this.state = {
						data:[]
					}
		//this.showUsers =  this.showUsers.bind(this)
	}

	componentWillMount() {
		this.props.showUsers()
	}

	render() {
		const {users} = this.props
		return (
			<div className="Users">
				<h3>Usuarios</h3>
				
				{/*<div>
                    <ul>
                      {this.state.data.map(function (data) {
                          return  <li key={data.id}>NOMBRE: {data.name} USUARIO: {data.username} CORREO: {data.email}</li>  
                      })}
                    </ul>
                </div>*/}
			</div>
		);
	}

	// showUsers(){
	// 	$.ajax({
	// 		type: "GET",
	// 		contextType: "application/json",
	// 		url: 'https://jsonplaceholder.typicode.com/users',
	// 		success: function(data){
	// 			if(data!=null){
	// 				console.log(data);
	// 				this.setState({
 //                        data:data
 //                    });

	// 			}else{
	// 				console.log("vacia");
	// 				this.setState({
 //                        data:''
 //                    });

	// 			}
	// 		}.bind(this),
 //            error: function(e) {
 //                console.log('error', e);
 //            }

	// 	});
	// }
}

function mapStateToProps(state) {
	console.log('estado usuario', state);
	return {
		users: state.users
	}
}

export default connect(mapStateToProps, { showUsers})(Users);
