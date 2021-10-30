import axios from 'axios';
import React, { useEffect } from "react";
// import { useForm, useFieldArray, Controller } from "./src";
import useForm from '../../../../hooks/useForm';
import Filter from './filter/filter';
import Product from './product/product';

const Products = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(search)

    useEffect(() => {
        props.getProducts();
    }, [])

    function search(){
        let searchTerm = formValues.searchTerm;
            props.setSearchName(searchTerm);
            formValues.searchTerm = '';
    }
    
    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input type="search" name="searchTerm" value={formValues.searchTerm} placeholder="Search Products" onChange={handleChange} aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
                <button className="btn btn-outline-success" onClick={props.getProducts}>Clear</button>
            </form>
            <Filter setSearchCategory={props.setSearchCategory}/>
            <div>
                {props.searchResults.map(product => {
                    return (
                        <Product addToCart={props.addToCart} product={product} user={props.user}/>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Products;