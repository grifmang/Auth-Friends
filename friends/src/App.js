import React from 'react';
import { Route } from "react-router-dom";
import PrivateRoute from "./component/Auth/PrivateRoute";
import Login from "./component/Auth/Login";
import Friends from "./component/Friends";
import AddFriend from "./component/AddFriend";
import './App.css';

function App() {
  return (
    <>
    <Route path="/login" component={Login} />
    <PrivateRoute path="/friends" component={Friends} />
    <PrivateRoute path="/add-friend" component={AddFriend} />
    </>
  );
}

export default App;
