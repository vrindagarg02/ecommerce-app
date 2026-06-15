import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    toast.success("🎉 Payment Successful! Order Placed.");
    setCart([]);
    navigate("/");
  };

  return (
    <div id="checkout-page" style={{ padding: "20px" }}>

      <h1 id="checkout-title">💳 Checkout</h1>

      {/* ORDER SUMMARY */}
      <div id="order-summary-box"
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2 id="summary-title">Order Summary</h2>

        {cart.map((item) => (
          <p key={item.id} id={`summary-item-${item.id}`}>
            {item.name} x {item.qty} = ₹{item.price * item.qty}
          </p>
        ))}

        <hr />

        <h3 id="total-price">Total: ₹{totalPrice}</h3>
      </div>

      {/* PAYMENT SECTION */}
      <div id="payment-box"
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        <h2 id="payment-title">Payment Details 💳</h2>

        <input
          id="card-number"
          placeholder="Card Number"
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "300px" }}
        />

        <input
          id="card-name"
          placeholder="Card Holder Name"
          style={{ display: "block", margin: "10px 0", padding: "10px", width: "300px" }}
        />

        <div id="card-extra" style={{ display: "flex", gap: "10px" }}>
          <input
            id="expiry"
            placeholder="MM/YY"
            style={{ padding: "10px", width: "140px" }}
          />

          <input
            id="cvv"
            placeholder="CVV"
            style={{ padding: "10px", width: "140px" }}
          />
        </div>

        <button
          id="pay-button"
          onClick={placeOrder}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Pay & Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;