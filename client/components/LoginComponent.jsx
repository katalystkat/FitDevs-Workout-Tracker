import React, {Component} from 'react'
import render from 'react-dom';
import Axios from 'axios';
import axios from 'axios';


class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            userNameInput: '',
            passwordInput: '',
            login: false,
        }
    }
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    const post_URL = "http://localhost:3000/api/loginUser";
    fetch(post_URL, {
        method: 'POST',
        credentials: 'include',
            headers: {
                'Accept': "application/json, text/plain",
                'Content-Type': 'application/json',
                'x-Trigger': 'CORS',
                'Access-Control-Allow-Origin': 'http://localhost:8080',

              },
        body: JSON.stringify(this.state),
    })
        .then((response) => response.json())
        .then(data => console.log(data))
        .then(response => {
            if (response){this.setState({login: true})
            }
    })
        .then(data => console.log(this.state))
        .catch(err => console.log(err));

  }
  render() {
    const { userNameInput, passwordInput } = this.state;
    return (
    <div>
    <form onSubmit={this.submitHandler}>
    <div>
    <label for="userNameInput">Username</label>
    <input name="userNameInput" id="userNameInput" type="text" value={userNameInput} onChange={this.changeHandler}></input>
  </div>
  <div>
    <label for="passwordInput">Password</label>
    <input name="passwordInput" id="passwordInput" type="password" value={passwordInput} onChange={this.changeHandler}></input>
  </div>
  <div>
    <button type='submit'>Submit</button>
  </div>
  </form>
  </div>
  )}
    }     

export default LoginComponent