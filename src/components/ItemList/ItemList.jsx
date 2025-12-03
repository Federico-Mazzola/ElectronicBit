// src/components/ItemList/ItemList.jsx
import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList({ products, onAddToCart }) {
    return (
        <div className="item-list-container">
            {products.map((product) => (
                <Item
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}
