import axios from 'axios';
import React, { useEffect } from "react";
// import { useForm, useFieldArray, Controller } from "./src";
import useForm from '../../../../hooks/useForm';
import Filter from './filter/filter';
import Reviews from '../../../../hooks/getReviews';
import Product from './product/product';

const SearchBar = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(search)
    // const reviews = () => {
    //     const productId = props.productId
    // }

    useEffect(() => {
        props.getProducts();
        // getProductReviews(props.productId);
    }, [])

    function search(){
        let searchTerm = formValues.searchTerm;
            props.setSearchName(searchTerm);
            formValues.searchTerm = '';
    }
    
    // async function getProductReviews(productId) {
    //     console.log(productId);
    //     let response = await axios.get(`https://localhost:44394/api/reviews/${productId}`);
    //     if (response.status === 200) {
    //         setReviews(response.data);
    //     }
    // }

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" name="searchTerm" value={formValues.searchTerm} placeholder="Search Products" onChange={handleChange}></input>
                <button type="submit">Search</button> */}
                <input type="search" name="searchTerm" value={formValues.searchTerm} placeholder="Search Products" onChange={handleChange} aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
                <button className="btn btn-outline-success" onClick={props.getProducts}>Clear</button>
            </form>
            <Filter setSearchCategory={props.setSearchCategory}/>
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
                            <Product product={product} addToCart={props.addToCart} user={props.user}/>
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