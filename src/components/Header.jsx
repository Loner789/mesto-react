// IMPORTS:
import logo from "../images/icon_logo.svg";

// HEADER COMPONENT:
function Header() {
  return (
    <header className="header header_place_mesto">
      <a href="https://wikiway.com/russia/" target="blank">
        <img
          src={logo}
          alt="Логотип Россия."
          className="logo logo_place_header"
        />
      </a>
    </header>
  );
}

export default Header;
