import { Link } from "react-router-dom";
import Cart from "../components/Cart";

function CartPage({ cart, setCart }) {
    return (
        <div className="cart-page">
            <Link to="/" className="back-link">← Back to Products</Link>
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
}

export default CartPage;
