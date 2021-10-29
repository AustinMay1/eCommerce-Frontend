import React from 'react';

const Product = (props) => {



    return (
        <div>
            {props.product.name}
            {props.product.description}
            {props.product.price}
            {props.product.category}
            <button onClick={event => props.addToCart(props.product.id, props.user.id, 1)}>Add to Cart</button>
            {props.reviews.map(review => {
                return (
                    <ul>
                        <li>{review.content}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Product;