import React from 'react';
import './NavBar.css'
//import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            {/* <Nav>
                <NavMenu>

                    <NavLink to="/" ></NavLink>
                    <NavLink to="/Aboutus" >ABOUT US</NavLink>
                    <NavLink to="/Product" >PRODUCT</NavLink>
                    <NavLink to="/Contact" >CONTACT</NavLink>
                </NavMenu>
            </Nav> */}
            <nav>
                <Link to="/" >HOME</Link>
                <Link to="/Aboutus" >ABOUT US</Link>
                <Link to="/Product" >PRODUCT</Link>
                <Link to="/Contact" >CONTACT</Link>
            </nav>
        </div >

    )
}
