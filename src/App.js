
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
//pages
import Products from './components/pages/home/products/products';
import ShoppingCart from './components/pages/cart/shoppingcart/shoppingcart';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';
import Seller from './components/pages/Seller/Seller';
import PostReview from './components/pages/cart/shoppingcart/postreview/postreview';
import Logout from './components/pages/logout';
//elements
import Navbar from './components/elements/navbar/navbar';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      searchTerm: '',
      searchResults: [],
      productsInCart: [],
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({user});
    } catch (ex){
      console.log(('Error in setting user', ex))
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

  getProducts = async () => {
    try{
      let response = await axios.get(`https://localhost:44394/api/products`);
      this.setState({
        searchResults: response.data
      })
    }
    catch (ex){
        console.log('Error in getProducts API call', ex);
    }
  }
  
  setSearchName = async (searchTerm) => {
    try{
        let response = await axios.get(`https://localhost:44394/api/search/name/${searchTerm}`);
        this.setState({
          searchResults: response.data
        })
    }
    catch (ex){
        console.log('Error in setSearchName API call', ex);
    }
  }

  setSearchCategory = async (searchTerm) => {
    try{
        let response = await axios.get(`https://localhost:44394/api/search/category/${searchTerm}`);
        this.setState({
          searchResults: response.data
        })
    }
    catch (ex){
        console.log('Error in setSearchCategory API call', ex);
    }
  }

  getProductsInCart = async () => {
    try{
      let response = await axios.get(`https://localhost:44394/api/shoppingcart/${this.state.user.id}`);
      this.setState({
        productsInCart: response.data
      })
    }
    catch (ex){
        console.log('Error in getProductsInCart API call', ex);
    }
  }

  deleteProductInCart = async (productId) => {
    try{
      await axios.delete(`https://localhost:44394/api/shoppingcart/product/${productId}/user/${this.state.user.id}`);
      this.getProductsInCart();
    }
    catch (ex){
        console.log('Error in deleteProductInCart API call', ex);
    }
  }

  render(){
    return (
      <Router>
        <Navbar user={this.state.user}/>
        
        <Switch>

          <Route exact path ="/" render={props => <Products {...props} user={this.state.user} addToCart={this.addToCart} getProducts={this.getProducts} searchTerm={this.state.searchTerm} setSearchName={this.setSearchName} setSearchCategory={this.setSearchCategory} searchResults={this.state.searchResults}/>}/>
          

          <Route path="/cart" render={props => <ShoppingCart {...props} transferProductId={this.transferProductId} getProductsInCart={this.getProductsInCart} deleteProductInCart={this.deleteProductInCart} productsInCart={this.state.productsInCart}/> } />
          

          <Route path="/login" component={Login} />


          <Route path="/register" component={Register} />

          
          <Route path="/seller" component={Seller} />
          

          <Route path="/postreview" component={PostReview} />


          <Route path="/logout" component={Logout} />

        </Switch>

      </Router>
    )
  }
}

// var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsZXhNIiwiZW1haWwiOiJhbGV4YW5kZXIuai5tZXNzaWVyQGdtYWlsLmNvbSIsImlkIjoiZmFkNWFhYTAtYjdlZi00YjUwLTg5ZWMtY2M2MzRmMmVmZDlmIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTYzNTQ0MjQzMCwiaXNzIjoiZUNvbW1lcmNlV2ViQVBJIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMSJ9.rm1YVeYGNkYT7uIJr1BLbkF2_YkgiqhW1dNfHj3U0WE";
// var decode = jwtDecode(token);
// console.log(decode);

export default App;