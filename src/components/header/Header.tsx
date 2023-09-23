import { useState } from "react";
import "./Header.css";

import logo from "/purchaseway-logo.png";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="cabecalho">
      <nav className="nav">
        <a href="/" className="logo">
          <img src={logo} alt="purchaseway-logo" />
        </a>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <ul className={menu ? "nav-mobile" : "nav-mobile hidden"}>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
        <div className="hamburger" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
