import React, { Component } from 'react';
import axios from 'axios';
import "./seller.css"

class Seller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'Hoodies',
            description: '',
            price: 0,
        }
    }

    handleProductChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handlePriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.createProduct(this.state)
    }
    
    createProduct = async (newProduct) => {
        try{
            let object=this.state
            await axios.post("https://localhost:44394/api/products", object);
        }
            
        catch(ex){
            console.log('Error in createProduct API call', ex)
        }
    }     

    render() {
        return (
            <div className="body">
            <div className= 'container'>
                <div className ="title">Create a Product Listing</div>
            <form className = "-container" onSubmit={this.handleSubmit}>
                <div className ="user-details">
                    <div className="input-box">
                    <span className="details">Product Name</span>
                    <input type='text'  value={this.state.name} onChange={this.handleProductChange}/>
                </div>
                <div className="input-box">
                <span className="details">Category</span>
                    <select value={this.state.category} onChange={this.handleCategoryChange}>
                        <option value="hoodies">Hoodies</option>
                        <option value="pants">Pants</option>
                        <option value="shirts">Shirts</option>
                        <option value="hats">Hats</option>
                        <option value="jackets">Jackets</option>
                    </select>
                </div>
                <div className="input-box">
                <span className="details">Description</span>
                <input type='text' value={this.state.description} onChange={this.handleDescriptionChange}/>
                </div>
                <div className="input-box">
                <span className="details">Price</span>
                    <input type="number" id="number" name="price" value={this.state.price} onChange={this.handlePriceChange}/>
                </div>
                
                <button className="button" type="submit">Submit</button>
            
                </div>
               
                </form>
            </div>
         </div>
        );
    }
}
export default Seller;
