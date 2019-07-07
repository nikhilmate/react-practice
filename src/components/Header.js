import React from 'react';
//import data from './user.json';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/action';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'name': props.name ? props.name : '',
			'users': props.users ? props.users : [],
			'isLoading': false,
			'isLoaded': false,
			'sortedUsers': []
		};
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log("update");
	// 	// if (prevProps.name !== this.props.name) {
	// 	// 	console.log("update");
	// 	// 	return true;
	// 	// } 
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log("should update");
	// }

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log("derived");
	// 	// if (nextProps.name !== prevState.name) {
	// 	// 	console.log("derived");
	// 	// 	return true;
	// 	// 	// return { name: nextProps.name};
	// 	// }
	// 	// else return null;
	// }

	// => This works well
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.name !== this.props.name) {
			let { name } = this.props;
			if (name.length > 0) {
				let sorted = this.state.users.filter(user => {
					if (user.name.indexOf(name) === 0) {
						return true;
					} else return false;
				});
				this.setState({
					sortedUsers: sorted,
					name
				})
			} else {
				this.setState({
					sortedUsers: []
				})
			}
		}
		if (prevProps.users !== this.props.users) {
			this.setState({
				users : this.props.users
			})
		}
	}

	//=> this works well
/*	
	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.users !== nextProps.users) {
			this.setState({
				users : nextProps.users
			});
			return true;
		}	else return false;
	}

	// => perfectly works
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.name !== prevState.name) {
			console.log(this.state);
			console.log("derived", prevState.name, nextProps.name);
			return { ...prevState, name: nextProps.name };
		}
		else return { prevState };
	}
*/
	onRemove = (e) => {
		let id = e.target.getAttribute('data-id');
		this.props.deleteUser(parseInt(id));
	}

	render() {
		return (
			<div className="header">
				<p>Name : &emsp;<b>{this.state.name ? this.state.name : 'NO NAME'}</b></p>

				<div className="sorted">
					<p><b>checker :</b></p>
					<table>
						<tbody>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Gender</th>
								<th></th>
							</tr>
							{
								this.state.sortedUsers.length > 0 ?
									this.state.sortedUsers.map((user, i) =>
										(<tr key={i + 1}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.gender}</td>
											<td><button className="remove-user" data-id={user.id} onClick={this.onRemove}>Remove</button></td>
										</tr>)
									) :
									<tr>
										<td>No data</td>
										<td>No data</td>
										<td>No data</td>
										<td></td>
									</tr>
							}
						</tbody>
					</table>
				</div>


				<div className="list">
					<p><b>Users :</b></p>
					<table>
						<tbody>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Gender</th>
								<th></th>
							</tr>
							{
								this.state.users.length > 0 ?
									this.state.users.map((user, i) =>
										(<tr key={i + 1}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.gender}</td>
											<td><button className="remove-user" data-id={user.id} onClick={this.onRemove}>Remove</button></td>
										</tr>)
									) :
									<tr>
										<td>No data</td>
										<td>No data</td>
										<td>No data</td>
										<td></td>
									</tr>
							}
						</tbody>
					</table>
				</div>

			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.user_details.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteUser : (id) => dispatch(deleteUser(id)) 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);




/* Working Model

import React from 'react';
//import data from './user.json';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'name': props.name,
			'users': [],
			'isLoading': false,
			'isLoaded': false,
			'sortedUsers': []
		};
	}

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log("update");
	// 	// if (prevProps.name !== this.props.name) {
	// 	// 	console.log("update");
	// 	// 	return true;
	// 	// }
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log("should update");
	// }

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log("derived");
	// 	// if (nextProps.name !== prevState.name) {
	// 	// 	console.log("derived");
	// 	// 	return true;
	// 	// 	// return { name: nextProps.name};
	// 	// }
	// 	// else return null;
	// }

	// => This works well
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.name !== this.props.name) {
			let { name } = this.state;
			if (name.length > 0) {
				this.setState({
					isLoading: true
				});
				let sorted = this.state.users.filter(user => {
					if (user.name.indexOf(name) === 0) {
						console.log("list", user);
						return true;
					} else return false;
				});
				this.setState({
					sortedUsers: sorted,
					isLoading: false
				})
			} else {
				this.setState({
					sortedUsers: [],
					isLoading: false
				})
			}
		}
	}

	// => this works well
	// shouldComponentUpdate(nextProps, nextState) {
	// 	if (this.state.name !== nextProps.name) {
	// 		this.setState({
	// 			name : nextProps.name
	// 		});
	// 		return true;
	// 	}	else return false;
	// }

	// => perfectly works
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.name !== prevState.name) {
			console.log("derived");
			return { name: nextProps.name };
		}
		else return null;
	}

	async componentDidMount() {
		await fetch('./user.json')
			.then(res => res.json())
			.then(data => {
				//console.log(data);
				this.setState({
					users: data.users
				});
			})
			.catch(error => console.log(error));
	}

	render() {
		return (
			<div className="header">
				<p>Name : &emsp;<b>{this.state.name ? this.state.name : 'NO NAME'}</b></p>

				<div className="sorted">
					<p><b>checker :</b></p>
					{
						this.state.isLoading === false ?
						<table>
							<tbody>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Gender</th>
								</tr>
								{
									this.state.sortedUsers.length > 0 ?
										this.state.sortedUsers.map((user, i) =>
											(<tr key={i + 1}>
												<td>{user.id}</td>
												<td>{user.name}</td>
												<td>{user.gender}</td>
											</tr>)
										) :
										<tr>
											<td>No data</td>
											<td>No data</td>
											<td>No data</td>
										</tr>
								}
							</tbody>
						</table> :
						<p>Loading -------</p>
					}
				</div>


				<div className="list">
					<p><b>Users :</b></p>
					<table>
						<tbody>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Gender</th>
							</tr>
							{
								this.state.users.length > 0 ?
									this.state.users.map((user, i) =>
										(<tr key={i + 1}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.gender}</td>
										</tr>)
									) :
									<tr>
										<td>No data</td>
										<td>No data</td>
										<td>No data</td>
									</tr>
							}
						</tbody>
					</table>
				</div>

			</div>
		);
	}
}

export default Header;




*/