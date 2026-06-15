/*function Cart() {
  return (
    <div>
      <h1>Cart Page 🛒</h1>
    </div>
  );
}

export default Cart;*/
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );

    toast.success("➕ Quantity increased");
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );

    toast.info("➖ Item updated/removed");
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <div id="cart-page" style={{ padding: "20px" }}>
      <h1>🛒 Cart</h1>

      {/* EMPTY CART TOAST BUTTON TRIGGER LOGIC */}
      {cart.length === 0 ? (
        <div>
          <p>Cart is empty</p>
          <button
            onClick={() => toast.error("Cart is empty!")}
          >
            Check Cart
          </button>
        </div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.qty}</p>
              <p>Total: ₹{item.price * item.qty}</p>
            </div>

            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>
        ))
      )}

      <hr />

      <h2>Total Items: {totalQuantity}</h2>
      <h2>Total Price: ₹{totalPrice}</h2>

      {/* CHECKOUT BUTTON */}
      {cart.length > 0 && (
        <button
          onClick={() => {
            toast.success("Redirecting to checkout...");
            navigate("/checkout");
          }}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: "#ff4d6d",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;