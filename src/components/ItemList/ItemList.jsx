import React from "react";
import Item from "../item/Item.jsx"; // Ruta correcta según tu estructura
import "./ItemList.css";

export default function ItemList({ products }) {
    if (!products || products.length === 0) {
        return (
            <h2 style={{ textAlign: "center" }}>
                No hay productos disponibles.
            </h2>
        );
    }

    return (
        <div className="item-list-container">
            {products.map((product) =>
                // Validación mínima: id y name existen
                product.id && product.name ? (
                    <Item
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ) : null
            )}
        </div>
    );
}
