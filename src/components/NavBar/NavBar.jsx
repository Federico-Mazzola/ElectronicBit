// src/components/NavBar/NavBar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
    const { totalItems } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const categories = ["Celulares", "Notebooks", "Tablets", "Accesorios", "Monitores"];

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    <span className="logo-white">Electronic</span>
                    <span className="logo-blue">Bit</span>
                </Link>
            </div>

            {/* Botón hamburguesa para móviles */}
            <button className="hamburger" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navegación */}
            <ul className={`navbar-nav ${menuOpen ? "open" : ""}`}>
                {categories.map((cat) => (
                    <li key={cat}>
                        <NavLink
                            to={`/category/${cat.toLowerCase()}`}
                            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
                            onClick={() => setMenuOpen(false)} // cierra el menú al hacer clic
                        >
                            {cat}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Carrito */}
            <div className="navbar-right">
                <Link to="/cart" className="cart-button">
                    <FaShoppingCart className="cart-icon" />
                    {totalItems() > 0 && <span className="cart-badge">{totalItems()}</span>}
                </Link>
            </div>
        </nav>
    );
}
