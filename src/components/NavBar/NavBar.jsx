// src/components/NavBar/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // archivo de estilos separado

function NavBar({ cartCount }) {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">MiTienda</Link>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>

            <div className="navbar__cart">
                <Link to="/carrito">
                    🛒 Carrito: <span className="cart-count">{cartCount}</span>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
