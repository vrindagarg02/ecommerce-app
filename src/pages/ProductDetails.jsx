import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 id="product-not-found">Product Not Found</h2>;
  }

  return (
    <div
      id="product-details-page"
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        margin: "20px",
        borderRadius: "10px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        background: "#fff",
      }}
    >
      {/* PRODUCT NAME */}
      <h1 id="product-name">{product.name}</h1>

      {/* CATEGORY */}
      <h3 id="product-category">
        Category: {product.category}
      </h3>

      {/* PRICE */}
      <h2 id="product-price">₹{product.price}</h2>

      {/* DESCRIPTION */}
      <p id="product-description">
        {product.description}
      </p>
    </div>
  );
}

export default ProductDetails;