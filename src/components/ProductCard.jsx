function ProductCard({ name, price, image, item, addToCart }) {
    return (
        <div className="card">
            <img src={image} alt={name} style={{ width: "120px" }} />
            <h3>{name}</h3>
            <p>₹{price}</p>

            <button onClick={() => addToCart(item)}>
                Add to Cart 🛒
            </button>
        </div>
    );
}

export default ProductCard;