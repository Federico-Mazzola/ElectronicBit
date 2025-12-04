import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
    const { totalItems } = useCart();

    return (
        <nav className="navbar">
            {/* Izquierda: logo + nav */}
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">
                    <span className="logo-white">Mi</span>
                    <span className="logo-blue">Tienda</span>
                </Link>

                <div className="navbar-nav">
                    <NavLink
                        to="/category/electronica"
                        className={({ isActive }) =>
                            isActive ? "navlink active" : "navlink"
                        }
                    >
                        Electrónica
                    </NavLink>
                    <NavLink
                        to="/category/ropa"
                        className={({ isActive }) =>
                            isActive ? "navlink active" : "navlink"
                        }
                    >
                        Ropa
                    </NavLink>
                </div>
            </div>

            {/* Derecha: carrito */}
            <div className="navbar-right">
                <Link to="/cart" className="cart-button">
                    <FaShoppingCart className="cart-icon" size={26} />
                    <span className="cart-badge">{totalItems()}</span>
                </Link>
            </div>
        </nav>
    );
}
