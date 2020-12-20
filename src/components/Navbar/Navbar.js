import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/space.png";
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className="NavigationContainer">
            <Link to='/' className="logo"> <img className="Logo" src={ logo } /></Link>
            <div className="Links">
                <NavLink to='/' exact={ true } className="navlinks" activeClassName='is-active' activeStyle={ { color: 'white' } } > Home</NavLink>
                <NavLink to='/launchpad' className="navlinks" activeClassName='is-active' activeStyle={ { color: 'white' } }>Programs</NavLink>
            </div>
        </div>
    )
}



export default Navbar;
