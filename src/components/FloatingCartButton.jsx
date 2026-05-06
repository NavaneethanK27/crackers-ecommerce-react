import { Link } from 'react-router-dom';

function FloatingCartButton({ cart = [] }) {
  return (
    <Link to="/cart" className="floating-cart-btn">
      🛒
      {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
    </Link>
  );
}

export default FloatingCartButton;
