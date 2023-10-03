import { useState } from "react";
import "./Header.css";

import logo from "/purchaseway-logo.png";
import { Link } from "react-router-dom";

function Header() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className="cabecalho">
            <nav className="nav">
                <Link
                    to="/"
                    className="logo"
                    onClick={() => {
                        scrollToTop();
                    }}
                >
                    <img src={logo} alt="purchaseway-logo" />
                </Link>
                <ul>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                scrollToTop();
                            }}
                        >
                            Início
                        </Link>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
                <ul className={menu ? "nav-mobile" : "nav-mobile hidden"}>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                scrollToTop();
                            }}
                        >
                            Início
                        </Link>
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
