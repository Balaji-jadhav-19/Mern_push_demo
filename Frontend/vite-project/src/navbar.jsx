import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-con">
      <div className="nav-logo" onClick={() => navigate("/")}>
        🚩 Swarajya
      </div>

      <div className="nav-links">
        <button onClick={() => navigate("/Home")}>Home</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button className="register-btn" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </nav>
  );
};
