import { useNavigate } from "react-router-dom";

function CartButton({ cartCount }) {
  const navigate = useNavigate();
 
  return (
    <button
      className="cart-btn"
      onClick={() => navigate("/cart")}
    >
      🛒 Cart ({cartCount})
    </button>
  );
}

export default CartButton;