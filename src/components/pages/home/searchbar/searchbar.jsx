import axios from 'axios';
import React, { useEffect } from "react";
// import { useForm, useFieldArray, Controller } from "./src";
import useForm from '../../../../hooks/useForm';

const SearchBar = (props) => {

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
                {/* <input type="text" name="searchTerm" value={formValues.searchTerm} placeholder="Search Products" onChange={handleChange}></input>
                <button type="submit">Search</button> */}
                <input type="search" name="searchTerm" value={formValues.searchTerm} placeholder="Search Products" onChange={handleChange} aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* <form onSubmit={handleSubmit}>
                    <label htmlFor='category'>Choose a category:</label>
                    <select name='category' value={formValues.searchTerm} onChange={handleChange}>
                        <option value='Hoodies'>Hoodies</option>
                        <option value='Pants'>Pants</option>
                        <option value='Shirts'>Shirts</option>
                    </select>
                    <button className="btn btn-outline-success" type="submit">Filter</button>
             </form> */}
            <div>
                {props.searchResults.map(product => {
                    return (
                        <div>
                            {product.name}
                            {product.description}
                            {product.price}
                            {product.category}
                            <button onClick={event => props.addToCart(product.id, props.user.id, 1)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
        // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { isSubmitSuccessful }
    //   } = useForm({ defaultValues: { something: "anything" } });
    
    //   const onSubmit = (data) => {
    //     console.log(data);
    //   };
    
    //   React.useEffect(() => {
    //     if (formState.isSubmitSuccessful) {
    //       reset({ something: '' });
    //     }
    //   }, [formState, submittedData, reset]);
    
    //   return (
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <input {...register("something")} />
    //       <input type="submit" />
    //     </form>
    //   );
}

export default SearchBar;