import React from 'react'

const Review = (props) => {

    return (
        <li>
            {props.review.content}
        </li>
    )
}

export default Review;