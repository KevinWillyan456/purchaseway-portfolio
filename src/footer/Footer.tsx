import "./Footer.css";

import logo from "/purchaseway-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <section className="content">
          <ul>
            <li className="logo">
              <a href="/">
                <img src={logo} alt="purchaseway-logo" />
              </a>
            </li>
            <li className="overview">
              A Purchaseway é uma empresa inovadora que se destaca por criar
              soluções digitais de alto desempenho que atendem a diversas
              paixões e interesses.
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
              <a href="https://pw-animes-react.vercel.app/" target="_blank">
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
                href="https://apague-pw.kevinsouza456.repl.co/"
                target="_blank"
              >
                Pw Music
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
              <a href="#">Docs</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Suporte</a>
            </li>
            <li>
              <a href="#">Status</a>
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
