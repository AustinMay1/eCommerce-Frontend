import React, { Component } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material'
import axios from 'axios';

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
            <div class= 'container'>
                <div class ="title">Create a product listing</div>
            <form onSubmit={this.handleSubmit}>
                {/* <div class ="user-details"> */}
                    <div class="input-box">
                    <span class="details">Product Name</span>
                    <input type='text' value={this.state.name} onChange={this.handleProductChange}/>
                </div>
                <div>
                    <label>Category</label>
                    <select value={this.state.category} onChange={this.handleCategoryChange}>
                        <option value="hoodies">Hoodies</option>
                        <option value="pants">Pants</option>
                        <option value="shirts">Shirts</option>
                        <option value="hats">Hats</option>
                        <option value="jackets">Jackets</option>
                    </select>
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" id="number" name="price" value={this.state.price} onChange={this.handlePriceChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        );
    }
}
export default Seller;
