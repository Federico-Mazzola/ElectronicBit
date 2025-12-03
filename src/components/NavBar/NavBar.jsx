import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import "./NavBar.css";

export default function NavBar({ cartCount: cartCountProp }) {
    // Si el padre (App) pasa cartCount lo usamos; sino lo sacamos del contexto
    const { totalItems } = useCart();
    const cartCount = typeof cartCountProp === "number" ? cartCountProp : totalItems();

    return (
        <header className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-logo" aria-label="ElectronicBit - home">
                    <span className="logo-white">Electronic</span>
                    <span className="logo-blue">Bit</span>
                </Link>

                <nav className="navbar-nav" aria-label="Main navigation">
                    <NavLink to="/category/celulares" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
                        Celulares
                    </NavLink>

                    <NavLink to="/category/notebooks" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
                        Notebooks
                    </NavLink>

                    <NavLink to="/category/accesorios" className={({ isActive }) => (isActive ? "navlink active" : "navlink")}>
                        Accesorios
                    </NavLink>
                </nav>
            </div>

            <div className="navbar-right">
                <Link to="/cart" className="cart-button" aria-label="Ir al carrito">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
                        alt="Carrito"
                        className="cart-icon"
                        width="24"
                        height="24"
                    />
                    <span className="cart-badge" aria-live="polite">{cartCount()}</span>
                </Link>
            </div>
        </header>
    );
}
