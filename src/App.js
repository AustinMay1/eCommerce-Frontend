
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
//pages
import Home from './components/pages/home/home';
import Cart from './components/pages/cart/cart';
import Login from './components/pages/login/login';
import Account from './components/pages/account/account';

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
         


      </Switch>




    </Router>
  );
}

export default App;

