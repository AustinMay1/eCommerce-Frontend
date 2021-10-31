import React, { useEffect, useState } from 'react';
import Reviews from './reviews/reviews';
import axios from 'axios';

const Product = (props) => {

    const[reviews, setReviews] = useState([])
    const[averageRating, setAverageRating] = useState([])

    const getReviews = async () => {
        try{
            let response = await axios.get(`https://localhost:44394/api/reviews/${props.product.id}`);
            setReviews(response.data);
        }
        catch (ex){
            console.log('Error in getReviews API call', ex);
        }
    }

    const getAverageRating = async () => {
        try{
            let response = await axios.get(`https://localhost:44394/api/reviews/average/${props.product.id}`);
            setAverageRating(response.data);
        }
        catch (ex){
            console.log('Error in getAverageRating API call', ex);
        }
    }

    useEffect(() => {
        getReviews(props.product.id);
    }, [props.product])

    useEffect(() => {
        getAverageRating(props.product.id);
    }, [props.product])

    return (
        <div>
            {props.product.name}
            {props.product.description}
            {props.product.price}
            {props.product.category}
            {averageRating}
            <button onClick={event => props.addToCart(props.product.id, 1)}>Add to Cart</button>
            <Reviews reviews={reviews}/>
        </div>
    )
}

export default Product;