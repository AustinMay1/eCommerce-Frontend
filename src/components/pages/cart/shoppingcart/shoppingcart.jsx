import React from 'react';
import { useEffect } from 'react';


const ShoppingCart = (props) => {

    useEffect(() => {
        props.getProductsInCart();
    }, [])

    return (
        <div>
            {props.productsInCart.map(product => {
                return (
                    <div>
                        {product.product.name}
                        {product.product.description}
                        {product.product.price}
                        {product.product.category}
                        {product.quantity}
                        <button onClick={event => props.deleteProductInCart(product.product.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ShoppingCart;

