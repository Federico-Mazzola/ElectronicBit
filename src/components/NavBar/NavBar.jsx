import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useCart } from "../../context/CartContext";

export default function NavBar() {
    const { totalItems } = useCart();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <span className="logo-white">Electronic</span>
                <span className="logo-blue">Bit</span>
            </Link>

            <ul className="navbar-links">
                <li>
                    <NavLink
                        to="/category/celulares"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Celulares
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/category/notebooks"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Notebooks
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/category/accesorios"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Accesorios
                    </NavLink>
                </li>
            </ul>

            <Link to="/cart" className="navbar-cart">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                    alt="Carrito"
                    className="cart-icon"
                />
                <span className="cart-count">{totalItems()}</span>
            </Link>
        </nav>
    );
}