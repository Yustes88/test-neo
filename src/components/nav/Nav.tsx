import "./styles.css";
import "../../App.css";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";
import { icons } from "../../data/data";
import { type FC } from "react";

const Nav: FC = () => {
  return (
    <div className="container">
      <div className="nav-container">
        <Logo />
        <div>
          <ul className="icons-list">
            {icons.map((icon) => (
              <Link to={icon.src} className="icon-link" key={icon.id}>
                {icon.icon}
                <span className="icon-badge">{icon.total}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
