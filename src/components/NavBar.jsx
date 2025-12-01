import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ cartCount }) {
    return (
        <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
                <span className="logo-white">Electronic</span>
                <span className="logo-blue">Bit</span>
            </Link>

            {/* Categorías */}
            <ul className="navbar-links">
                <li>
                    <NavLink to="/category/celulares">Celulares</NavLink>
                </li>
                <li>
                    <NavLink to="/category/notebooks">Notebooks</NavLink>
                </li>
                <li>
                    <NavLink to="/category/accesorios">Accesorios</NavLink>
                </li>
            </ul>

            {/* Carrito */}
            <Link to="/cart" className="navbar-cart">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                    alt="Carrito"
                    className="cart-icon"
                />
                <span className="cart-count">{cartCount}</span>
            </Link>
        </nav>
    );
}
