import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ products }) {
    return (
        <div className="itemlist-container">
            <h2 className="itemlist-title">Nuestros Productos</h2>

            <div className="itemlist-grid">
                {products.map((prod) => (
                    <Item
                        key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        price={prod.price}
                        image={prod.image}
                    />
                ))}
            </div>
        </div>
    );
}
