import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "/purchaseway-logo.png";
import { useMainProjectsRef } from "../../hooks/useMainProjectsRef";

function Header() {
    const [menu, setMenu] = useState(false);

    const mainProjectsRef = useMainProjectsRef();

    const handleMenu = () => {
        setMenu(!menu);
    };

    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 50);
    };

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/about") {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
    }, []);

    return (
        <header className="cabecalho">
            <nav className="nav">
                <Link
                    to="/"
                    className="logo"
                    onClick={() => {
                        scrollToTop();
                        setMenu(false);
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
                        <Link
                            to="/about"
                            onClick={() => {
                                scrollToTop();
                            }}
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                setTimeout(() => {
                                    window.scrollTo({
                                        top: window.innerHeight - 60,
                                        behavior: "smooth",
                                    });
                                }, 50);
                            }}
                        >
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => {
                                scrollToTop();
                            }}
                        >
                            Contato
                        </Link>
                    </li>
                </ul>
                <ul className={menu ? "nav-mobile" : "nav-mobile hidden"}>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                scrollToTop();
                                handleMenu();
                            }}
                        >
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            onClick={() => {
                                scrollToTop();
                                handleMenu();
                            }}
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            onClick={() => {
                                handleMenu();
                                setTimeout(() => {
                                    if (mainProjectsRef.current) {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "instant",
                                        });

                                        const alturaElemento =
                                            mainProjectsRef.current.getBoundingClientRect()
                                                .top;
                                        window.scrollTo({
                                            top: alturaElemento - 100,
                                            behavior: "smooth",
                                        });
                                    }
                                }, 50);
                            }}
                        >
                            Serviços
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            onClick={() => {
                                scrollToTop();
                                handleMenu();
                            }}
                        >
                            Contato
                        </Link>
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
