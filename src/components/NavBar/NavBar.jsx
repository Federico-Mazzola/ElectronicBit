import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./NavBar.css";
import cartIcon from "../../assets/cart-icon.png"; // si tenés un ícono para el carrito

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
                    <Link to="/category/electronica" className="navlink">
                        Electrónica
                    </Link>
                    <Link to="/category/ropa" className="navlink">
                        Ropa
                    </Link>
                </div>
            </div>

            {/* Derecha: carrito */}
            <div className="navbar-right">
                <Link to="/cart" className="cart-button">
                    <img src={cartIcon} alt="Carrito" className="cart-icon" />
                    <span className="cart-badge">{totalItems()}</span>
                </Link>
            </div>
        </nav>
    );
}
