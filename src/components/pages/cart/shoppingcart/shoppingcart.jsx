import React from 'react';
import { useEffect } from 'react';
import '../cart.css';


const ShoppingCart = (props) => {

    useEffect(() => {
        props.getProductsInCart();
    }, [])

    return (
        <React.Fragment>
        <div classname='container'>
            <div className='row'>
                <div className='col-2' />
                    <div className='col-8'>
                        {props.productsInCart.map(product => {
                            return (
                                <div classname='product'>
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
                <div className='col-2' />
            </div>
        </div>
        </React.Fragment>
    )
}

export default ShoppingCart;

