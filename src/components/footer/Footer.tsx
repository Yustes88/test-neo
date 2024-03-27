import "./styles.css";
import "../../App.css";
import { type FC } from "react";
import Logo from "../ui/Logo";
import { footerLinks, languages, socialMediaLinks } from "../../data/data";
import { Link, NavLink } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import IconLink from "../ui/IconButton";

const Footer: FC = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <Logo />
        <div className="links-container">
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
        <div className="lng-container">
          <span>Условия сервиса</span>
          <div className="footer-lng-link">
            <MdLanguage />
            <ul>
              {languages.map((language) => (
                <NavLink
                  key={language.id}
                  to={language.url}
                  className={({ isActive }) =>
                    isActive ? " footer-lng footer-lng_active" : `footer-lng`
                  }
                >
                  {language.title}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
        <div className="socials-container">
          {socialMediaLinks.map((socialMediaLink) => (
            <IconLink toPath={socialMediaLink.url} key={socialMediaLink.id}>
              <img src={socialMediaLink.icon} alt="Social media logo" />
            </IconLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
