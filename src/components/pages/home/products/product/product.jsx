import React, { useEffect, useState } from 'react';
import Reviews from './reviews/reviews';
import axios from 'axios';

const Product = (props) => {

    const[reviews, setReviews] = useState([])

    const getReviews = async () => {
        try{
            let response = await axios.get(`https://localhost:44394/api/reviews/${props.product.id}`);
            setReviews(response.data);
        }
        catch (ex){
            console.log('Error in getReviews API call', ex);
        }
    }

    useEffect(() => {
        getReviews(props.product.id);
    }, [props.product])

    return (
        <div>
            {props.product.name}
            {props.product.description}
            {props.product.price}
            {props.product.category}
            <button onClick={event => props.addToCart(props.product.id, props.user.id, 1)}>Add to Cart</button>
            <Reviews reviews={reviews} />
        </div>
    )
}

export default Product;