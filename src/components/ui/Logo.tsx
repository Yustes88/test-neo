import "./styles.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo-link">
        QPICK
      </Link>
    </div>
  );
};

export default Logo;
