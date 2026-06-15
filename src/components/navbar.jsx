import { Link, useNavigate } from "react-router-dom";

function Navbar({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav>
      <div className="left">
        <Link to="/">Home</Link>
      </div>

      <div className="center">
        <h2> StyleCart🛍</h2>
      </div>

      <div className="right">
        <Link to="/cart"> Cart🛍️</Link>

        <button onClick={handleLogout}>
          Logout 🚪
        </button>
      </div>
    </nav>
  );
}

export default Navbar;