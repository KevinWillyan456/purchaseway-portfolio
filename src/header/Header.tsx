import "./Header.css";

import logo from "/purchaseway-logo.png";

function Header() {
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
      </nav>
    </header>
  );
}

export default Header;
