import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "/purchaseway-logo.png";
import { useMainProjectsRef } from "../../hooks/useMainProjectsRef";

function Footer() {
    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 50);
    };

    const mainProjectsRef = useMainProjectsRef();

    return (
        <footer className="footer">
            <div className="container-footer">
                <section className="content">
                    <ul>
                        <li className="logo">
                            <Link to="/">
                                <img src={logo} alt="purchaseway-logo" />
                            </Link>
                        </li>
                        <li className="overview">
                            A Purchaseway é uma empresa inovadora que se destaca
                            por criar soluções digitais de alto desempenho que
                            atendem a diversas paixões e interesses.
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Produtos</h1>
                        </li>
                        <li>
                            <a
                                href="https://purchaseway-animes-node.kevinsouza456.repl.co/"
                                target="_blank"
                            >
                                Pw Animes
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://pw-animes-react.vercel.app/"
                                target="_blank"
                            >
                                Pw Animes React
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://kevinwillyan456.github.io/purchaseway-exports/"
                                target="_blank"
                            >
                                Pw Exports
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://purchaseway-manga.vercel.app/"
                                target="_blank"
                            >
                                Pw Manga
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://apague-pw.kevinsouza456.repl.co/"
                                target="_blank"
                            >
                                Pw Music
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://kevinwillyan456.github.io/pw-music-game/"
                                target="_blank"
                            >
                                Pw Music Game
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Sponsors</h1>
                        </li>
                        <li>
                            <a href="#">GitHub</a>
                        </li>
                        <li>
                            <a href="#">YouTube</a>
                        </li>
                        <li>
                            <a href="#">Vercel</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Tecnologias</h1>
                        </li>
                        <li>
                            <a href="#">JavaScript</a>
                        </li>
                        <li>
                            <a href="#">TypeScript</a>
                        </li>
                        <li>
                            <a href="#">Node Js</a>
                        </li>
                        <li>
                            <a href="#">MongoDb</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Links</h1>
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
                                        if (window.innerWidth > 600) {
                                            window.scrollTo({
                                                top: window.innerHeight - 60,
                                                behavior: "smooth",
                                            });
                                        } else {
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
                                }}
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </section>
                <div className="copyright">
                    @ 2022-2023 Purchaseway - Todos os diretos reservados
                </div>
            </div>
        </footer>
    );
}

export default Footer;
