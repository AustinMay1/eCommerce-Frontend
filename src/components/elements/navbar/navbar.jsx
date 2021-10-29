import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from '../../pages/home/searchbar/searchbar';


const Navbar = ({user}) => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
            Logo(Home Button)
        </NavLink>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {
                    <React.Fragment>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/seller">
                                List Product
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                Shopping Cart
                            </NavLink>
                        </li>
                        {/* <form className="d-flex" method="get" action={"/"}> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">
                                Logout
                            </NavLink>
                        </li>
                    </React.Fragment>
                }
        </ul>
        </div>
              
        </div>
        
        </nav>
        </>
    );
}

export default Navbar;
