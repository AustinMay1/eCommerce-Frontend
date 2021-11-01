import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import '../cart.css';

const ShoppingCart = (props) => {

    const [total, setCartTotal] = useState(0);

    useEffect(() => {
        props.getProductsInCart();
        getCartTotal(props.user.id);
    }, [props.productsInCart])

    async function getCartTotal (userId) {
        try{
          const jwt = localStorage.getItem('token');
          let response = await axios.get(`https://localhost:44394/api/shoppingcart/total/${userId}`, { headers: {Authorization: 'Bearer ' + jwt}});
          setCartTotal(response.data)
        }
        catch (ex){
            console.log('Error in getCartTotal API call', ex);
        }
    }

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
                                        <button onClick={event => props.deleteProductInCart(product.product.id)}>Remove from Cart</button>
                                        <Link to ={{
                                            pathname:'/postreview',
                                            postReviewProps:{
                                                productId: product.product.id
                                            }
                                        }} >Leave Review</Link>
                                    </div>
                                )
                            })}
                            {total}
                        </div>
                    <div className='col-2' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShoppingCart;

