import React from "react";
import Item from "../Item/Item.jsx";
import "./ItemList.css";

export default function ItemList({ products, addToCart }) {
    return (
        <div className="item-list-container">
            {products.map((product) => (
                <Item
                    key={product.id}
                    {...product} // pasa todas las props del producto
                    addToCart={addToCart} // función directa del contexto
                />
            ))}
        </div>
    );
}
