import React from 'react'

const Review = (props) => {

    return (
        <li>
            {props.review.content}
            {props.review.rating}
        </li>
    )
}

export default Review;