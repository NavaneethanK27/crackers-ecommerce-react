import crackers from "../data/Crackers";
import ProductCard  from "../components/ProductCard";
function Products(){
    
    const groupedCrackers = crackers.reduce((groups, item) => {
        const category = item.category || 'Uncategorized';
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(item);
        return groups;
    }, {});

    return(
        <div>
            <h1>Crackers List</h1>
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
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;