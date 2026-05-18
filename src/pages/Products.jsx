import { useState } from "react";
import crackers from "../data/Crackers";
import ProductCard from "../components/ProductCard";
import "../product.css"; 

function Products({ addToCart }) {

    const [filter, setFilter] = useState("all");

    const categoryTypeMap = {
        "Flower Pots": "kids",
        "Spinners": "kids",
        "Fountains": "kids",
        "Sound Crackers": "adult"
    };

   
    const filteredCrackers = crackers.filter((item) => {
        if (filter === "all") return true;
        return categoryTypeMap[item.category] === filter;
    });

   
    const groupedCrackers = filteredCrackers.reduce((groups, item) => {
        const category = item.category || "Uncategorized";
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});

    return (
        <div>
            <h1>Crackers List</h1>

          
            <div className="filter-buttons">

                <button
                    onClick={() => setFilter("all")}
                    className={filter === "all" ? "active" : ""}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("kids")}
                    className={`kids ${filter === "kids" ? "active" : ""}`}
                >
                    Kids
                </button>

                <button
                    onClick={() => setFilter("adult")}
                    className={`adult ${filter === "adult" ? "active" : ""}`}
                >
                    Adult
                </button>

            </div>

            {/* 🧨 Products */}
            {Object.entries(groupedCrackers).map(([category, items]) => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>

                    <div className="product-grid">
                        {items.map((item) => (
                            <ProductCard
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                item={item}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;