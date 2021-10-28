
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
//pages
import Home from './components/pages/home/home';
import Cart from './components/pages/cart/cart';
import Login from './components/pages/login/login';
import Account from './components/pages/account/account';
import Register from './components/pages/register/register';

//elements
import Navbar from './components/elements/navbar/navbar';


function App() {
  const [user, setUser] = useState(null);
  const jwt = localStorage.getItem('token');
  useEffect(() => {
    try{
      const localUser = jwtDecode (jwt);
      setUser(localUser);
    } catch {}
  }, [])
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path ="/home" component={Home} />
        

        <Route path="/cart" component={Cart} />
         

        <Route path="/login" component={Login} />
        

        <Route path="/account" component={Account} />


        <Route path="/register" component={Register} />
         


      </Switch>




    </Router>
  );
}
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXhNIiwiZW1haWwiOiJhbGV4YW5kZXIuai5tZXNzaWVyQGdtYWlsLmNvbSIsImlkIjoiY2FlZmEzOTEtMjAxZC00ZGM0LWE1MmQtMWExNjUyZDJhZDhjIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTYzNTQzOTc4NiwiaXNzIjoiZUNvbW1lcmNlV2ViQVBJIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSJ9.hNqoidH-FU9H8O0832vXJWLBGDEJ45K7-4gsf0EZuAI"
var decode = jwtDecode(token)
console.log(decode);
export default App;

