import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import './shoppingcart.css'


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
            <div classname='container con-body'>
                <div className='row'>
                    <div className='col-3' />
                        <div className='col-6'>
                            {props.productsInCart.map(product => {
                                return (
                                    <div classname='card product'>
                                        <h2>
                                            {product.product.name}
                                        </h2>
                                        <div>
                                            {product.product.description}
                                        </div>
                                        <div>
                                            ${product.product.price}
                                        </div>
                                        <div>
                                            {product.product.category}
                                        </div>
                                        <div>
                                            Quantity{product.quantity}
                                        </div>
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
                            <div className="total">
                                {total}
                            </div>
                        </div>
                    <div className='col-3' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ShoppingCart;

