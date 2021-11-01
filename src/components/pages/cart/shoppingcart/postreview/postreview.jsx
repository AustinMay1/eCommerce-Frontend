import axios from 'axios';
import React from "react";
import useForm from '../../../../../hooks/useForm';
import { useHistory } from "react-router-dom";


const PostReview = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(submitReview)
    const history = useHistory();

    function submitReview(){
        let ratingToInt = parseInt(formValues.rating);
        let review = {
            rating: ratingToInt,
            content: formValues.content,
            productId: props.location.postReviewProps.productId
        };
        postReview(review);
        history.push('/cart')
    }

    const postReview = async (review) => {
        try{
            const jwt = localStorage.getItem('token');
            await axios.post(`https://localhost:44394/api/reviews`, review, { headers: {Authorization: 'Bearer ' + jwt}});
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
                <input type="number" min="1" max="5" name="rating" value={formValues.rating} onChange={handleChange}></input>
                <button className="btn btn-outline-success" type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default PostReview;