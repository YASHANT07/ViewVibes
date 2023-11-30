import React from 'react';
import './Navbar.css';
import {useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom/dist';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="hotstar-navbar">
            <div>
                <NavLink style={{textDecoration: 'none' , color: "gray"}} to='/'> <h2 >ViewVibes</h2></NavLink>
            </div>
            <div className="hotstar-navbar-left">
                <div className='navigation-item'>
                    <NavLink className='navigation-item-name' to='/'>Home</NavLink>
                    <NavLink className='navigation-item-name' to='/tv_show'>Tv Show</NavLink>
                    <NavLink className='navigation-item-name' to='/trending'>Trending</NavLink>
                    <NavLink className='navigation-item-name' to='/Movies'>Movies</NavLink>
                    <NavLink className='navigation-item-name' to='/sports'>Sports</NavLink>
                    <NavLink className='navigation-item-name' to='/kids'>Kids</NavLink>
                </div>
                <div className="hotstar-navbar-right">
                    <input type="text" placeholder="Search..." />
                    <button onClick={() => {navigate('login')}} >Sign In</button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
