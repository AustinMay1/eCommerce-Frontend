import axios from 'axios';
import React, { useEffect } from "react";
// import { useForm, useFieldArray, Controller } from "./src";
import useForm from '../../../../../hooks/useForm';


const PostReview = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(submitReview)

    function submitReview(){
        let ratingToInt = parseInt(formValues.rating);
        let review = {
            rating: ratingToInt,
            content: formValues.content,
            productId: props.location.postReviewProps.productId
        };
        postReview(review);
    }

    const postReview = async (review) => {
        try{
            await axios.post(`https://localhost:44394/api/reviews`, review);
        }
            catch (ex){
            console.log('Error in postReview API call', ex);
        }
    }
    
    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="content">Review Body</label>
                <input type="text" name="content" value={formValues.content} onChange={handleChange}></input>
                <label htmlFor="rating">Rating</label>
                <input type="number" name="rating" value={formValues.rating} onChange={handleChange}></input>
                <button className="btn btn-outline-success" type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default PostReview;