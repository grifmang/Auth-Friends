import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {

  const [userState, setUserState] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', userState)
    .then(response => {
      window.localStorage.setItem('token', response.data.payload);
      props.history.push("/friends");
    })
    .catch(err => console.log(err));
  }

  const handleChanges = (e) => {
    setUserState({...userState, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username: </label>
      <input type='text' value={userState.username} onChange={handleChanges} name='username' />
      <label htmlFor='password'>Password: </label>
      <input type='password' value={userState.password} onChange={handleChanges} name='password' />
      <button>Login</button>
    </form>
  )
}

export default Login;