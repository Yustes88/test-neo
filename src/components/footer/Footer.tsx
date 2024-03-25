import "./styles.css";
import "../../App.css";
import { useState, type FC } from "react";
import Logo from "../ui/Logo";
import { footerLinks, languages } from "../../data/data";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";

const Footer: FC = () => {
  const [active, isActive] = useState(true);

  return (
    <div className="container">
      <div className="footer-container">
        <Logo />
        <div className="footer-links">
          {footerLinks.map((footerLink) => (
            <Link
              to={footerLink.url}
              key={footerLink.id}
              className="footer-link"
            >
              {footerLink.title}
            </Link>
          ))}
        </div>
        <div>
          <p>Условия сервиса</p>
          <div className="footer-lng-link">
            <MdLanguage />
            <ul>
              {languages.map((language) => (
                <Link
                  key={language.id}
                  to={language.url}
                  className={`footer-lng`}
                >
                  {language.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
