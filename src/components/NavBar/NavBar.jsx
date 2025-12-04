import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { FaShoppingCart } from "react-icons/fa"; // Icono del carrito
import "./NavBar.css";

export default function NavBar() {
    const { totalItems } = useCart();

    // Categorías válidas
    const categories = ["celulares", "accesorios", "tablets", "notebooks", "monitores"];

    return (
        <nav className="navbar">
            {/* IZQUIERDA: Logo + navegación */}
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    <span className="logo-white">Electronic</span>
                    <span className="logo-blue">Bit</span>
                </Link>

                <div className="navbar-nav">
                    {categories.map((cat) => (
                        <NavLink
                            key={cat}
                            to={`/category/${cat}`}
                            className={({ isActive }) =>
                                isActive ? "navlink active" : "navlink"
                            }
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* DERECHA: Carrito */}
            <div className="navbar-right">
                <Link to="/cart" className="cart-button">
                    <FaShoppingCart className="cart-icon" />
                    {totalItems() > 0 && (
                        <span className="cart-badge">{totalItems()}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}
