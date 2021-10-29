
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//pages
import Home from './components/pages/home/home';
import Cart from './components/pages/cart/cart';
import Login from './components/pages/login/login';
import Account from './components/pages/account/account';
import Register from './components/pages/register/register';


//elements
import Navbar from './components/elements/navbar/navbar';
import SearchBar from './components/pages/home/searchbar/searchbar';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      searchTerm: '',
      searchResults: [
       {
         name: '',
         description: '',
         price: 0,
         category: ''
       }
       ]
    };
  }
  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({user});
    } catch {}
  }
  setSearch = async (searchTerm) => {
    try{
        let response = await axios.get(`https://localhost:5001/api/search/name/${searchTerm}`);
        this.setState({
          searchResults: response
        })
    }
    catch (ex){
        console.log('Error in setSearch API call', ex);
    }
  }
  // code for using using hook
  // const [user, setUser] = useState(null);
  // const jwt = localStorage.getItem('token');
  // useEffect(() => {
  //   try{
  //     const localUser = jwtDecode (jwt);
  //     setUser(localUser);
  //   } catch {}
  // }, [])
  render(){
    return (
      <Router>
        <Navbar />
        
        <Switch>

          <Route path ="/home" render={props => <SearchBar {...props} searchTerm={this.state.searchTerm} setSearch={this.setSearch} />}/>
          

          <Route path="/cart" component={Cart} />
          

          <Route path="/login" component={Login} />
          

          <Route path="/account" component={Account} />


          <Route path="/register" component={Register} />
          
        </Switch>

      </Router>
    )
  }
}

// var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXhNIiwiZW1haWwiOiJhbGV4YW5kZXIuai5tZXNzaWVyQGdtYWlsLmNvbSIsImlkIjoiZmFkNWFhYTAtYjdlZi00YjUwLTg5ZWMtY2M2MzRmMmVmZDlmIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTYzNTQ0MjQzMCwiaXNzIjoiZUNvbW1lcmNlV2ViQVBJIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSJ9.rm1YVeYGNkYT7uIJr1BLbkF2_YkgiqhW1dNfHj3U0WE";
// var decode = jwtDecode(token);
// console.log(decode);

export default App;

