import React, { useEffect } from "react";
import useForm from '../../../../hooks/useForm';
import Filter from './filter/filter';
import Product from './product/product';


const Products = (props) => {

    const { formValues, handleChange, handleSubmit } = useForm(search)

    useEffect(() => {
        props.getProducts();
    }, [])

    function search(){
        let searchTerm = formValues.searchTerm;
            props.setSearchName(searchTerm);
            formValues.searchTerm = '';
    }
    
    return(
        <React.Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2 side-pad'/>
                    <div className='col-8 main-col'>
                        <div className='card search-card'>
                            <form onSubmit={handleSubmit}>
                                <input type="search" name="searchTerm" value={formValues.searchTerm} placeholder="Search Products" onChange={handleChange} aria-label="Search"></input>
                                <button className="btn btn-primary scoot-btn" type="submit">Search</button>
                                <button className="btn btn-primary scoot-btn" onClick={props.getProducts}>Clear</button>
                            </form>
                            <Filter setSearchCategory={props.setSearchCategory}/>
                        </div>
                        {props.searchResults.map(product => {
                            return (
                                <Product user={props.user} addToCart={props.addToCart} product={product}/>
                            )
                        })}
                    </div>
                    <div className='col-2 side-pad' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products;