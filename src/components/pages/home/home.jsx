import react from 'react';

const Home = () => {
    
    return (
        <div className="m-5 container">
            
                <h1></h1>
                <h2>Description: </h2>
                <h3>Price: </h3>
                <div className="btn-group p-3" role="group">
                    { /* Add to cart section */ }
                    <button className="btn btn-outline-secondary">Qty</button>
                    <button className="btn btn-outline-secondary">+</button>
                    <button className="btn btn-outline-secondary">-</button>
                </div>
                <button className="btn btn-success">Add to cart</button>
                </div>
                
            
    )
}

export default Home;
