import React from 'react';
import SearchData from './components/SearchData';
import { connect } from 'react-redux';
import { addUser } from './actions/action';

import './styles/main.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'toggled': true,
      'AddUserToggle': true,
      'formdata': {
        'username': '',
        'gender': ''
      },
      'users': props.users ? props.users : []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.users !== prevState.users) {
			console.log("derived");
			return { users : nextProps.users };
		}
		else return null;
	}

  // componentDidUpdate(prevState) {
  //   if (this.state.users !== prevState.users) {
  //     let users = JSON.stringify(this.state.users);
  //     console.log("changes", this.state.users);
  //   }
  //   console.log("updated", this.state);
  // }

  onChangeHandler = (e) => {
    this.setState({
      user: e.target.value
    });
  }

  toggleSearch = () => {
    this.setState((prevState) => ({
      toggled: !prevState.toggled
    }));
  }

  toggleAddUser = () => {
    this.setState((prevState) => ({
      AddUserToggle: !prevState.AddUserToggle
    }));
  }

  formSubmit = (e) => {
    e.preventDefault();
    let { username } = this.state.formdata;
    let { gender } = this.state.formdata;
    if (username !== '' && gender !== '') {
      this.props.addUser(username, gender);
    }
  }

  inputChange = (e) => {
    this.setState({
      ...this.state,
      formdata: {
        ...this.state.formdata,
        username: e.target.value
      }
    });
  }

  // async componentDidMount() {
  //   let data = await localStorage.getItem('users') ? localStorage.getItem('users') : [];
  //   let users = JSON.parse(data);
  //   this.setState({
  //     users
  //   });
  // }

  selectChange = (e) => {
    this.setState({
      ...this.state,
      formdata: {
        ...this.state.formdata,
        gender: e.target.value
      }
    });
  }

  render() {
    console.log('app', this.state.users);
    return (
      <div className="App">
        <div className="container row">
          <div className="row-child">
          {
            this.state.AddUserToggle &&
            <div className="user-form">
              <h3>Add User</h3>
              <form onSubmit={this.formSubmit}>
                <input
                  type="text"
                  name="username"
                  onChange={this.inputChange}
                  required
                />
                <select required
                  onChange={this.selectChange}
                >
                  <option value="">None</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <button>Add User</button>
              </form>
            </div>
          }
          </div>
          <div className="row-child">
          {
            this.state.toggled &&
            <SearchData />
          }
          </div>
          <div className="top-btn">
            <button onClick={this.toggleAddUser}>{this.state.AddUserToggle === true ? 'Hide' : 'Add user'}</button>
          </div>
          <div className="bottom-btn">
            <button onClick={this.toggleSearch}>{this.state.toggled === true ? 'Hide Searching' : 'View Searching'}</button>
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    addUser: (name, gender) => dispatch(addUser(name, gender))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
