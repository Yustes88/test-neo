import "./styles.css";
import "../../App.css";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import { icons } from "../../data/data";
import { type FC } from "react";
import { useCartContext } from "../../providers/CartProvider";

const Nav: FC = () => {
  const { cartItems } = useCartContext();

  const total = cartItems.reduce((item1, item2) => {
    return item1 + item2.total;
  }, 0);

  return (
    <div className="container">
      <div className="nav-container">
        <Logo />
        <div>
          <ul className="icons-list">
            {icons.map((icon) => (
              <Link to={icon.src} className="icon-link" key={icon.id}>
                {icon.icon}
                <span className="icon-badge">
                  {icon.key === "cart" ? total : 0}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
