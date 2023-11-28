import React from 'react';


import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="hotstar-navbar">
            <div className="hotstar-navbar-left">
                <h2>ViewVibes</h2>
                <ul>
                
                
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/tv_show">Tv Show</Link>
                    </li>

                    <li>
                    <Link to="/trending">Trending</Link>
                    </li>
                    <li>
                    <Link to="/movies">Movies</Link>
                    </li>

                    <li>
                    <Link to="/sports">Sports</Link>
                    </li>
                    <li>
                    <Link to="/kids">Kids</Link>
                    </li>

                     

                </ul>
            </div>
            <div className="hotstar-navbar-right">
                <input type="text" placeholder="Search..." />
                <button>Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;
