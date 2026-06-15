/*import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <Link to={`/product/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;*/
/*
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";
import { toast } from "react-toastify";
function Home() {
  const { addToCart } = useContext(CartContext);

  const [category, setCategory] = useState("Men");

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  const getImage = (category) => {
    switch (category) {
      case "Men":
        return "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500";

      case "Women":
        return "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500";

      case "Footwear":
        return "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500";

      case "Accessories":
        return "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500";

      default:
        return "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500";
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>StyleCart Fashion Store 👕👗</h1>

      {/* Category Buttons *//*
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button onClick={() => setCategory("Men")}>
          Men
        </button>

        <button onClick={() => setCategory("Women")}>
          Women
        </button>

        <button onClick={() => setCategory("Footwear")}>
          Footwear
        </button>

        <button onClick={() => setCategory("Accessories")}>
          Accessories
        </button>
      </div>

      {/* Products Grid */
 import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products"; // ✅ FIXED IMPORT
import { toast } from "react-toastify";
function Home() {
  const { addToCart } = useContext(CartContext);
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="container" id="home-page">
      <h1 id="home-title">🛍 Style Cart</h1>

      {/* CATEGORY FILTER */}
      <div id="category-buttons">
        {["All", "Men", "Women", "Footwear", "Accessories"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            id={`btn-${cat.replace(/\s/g, "-")}`} // safer id
            style={{
              margin: "5px",
              padding: "8px 12px",
              background: category === cat ? "#ff4d6d" : "#111",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="product-grid" id="product-grid">
        {filteredProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
            id={`product-${product.id}`}
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
              />
            )}

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <p style={{ fontSize: "12px", color: "#666" }}>
              {product.description}
            </p>

            <div style={{ marginTop: "10px" }}>
              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>

              <button
  onClick={() => {
    addToCart(product);
    toast.success("🛒 Added to Cart!");
  }}
  style={{ marginLeft: "10px", background: "#ff4d6d" }}
>
  Add To Cart
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;