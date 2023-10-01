import { Link } from "react-router-dom";
import "./Banner.css";
import logoMedium from "/purchaseway-medium-logo.png";

function Banner() {
    return (
        <section className="banner">
            <div className="title">
                Conheça a empresa inovadora em serviços para a web
            </div>
            <Link to="/" className="logo-medium">
                <img src={logoMedium} alt="purchaseway-medium-logo" />
            </Link>
        </section>
    );
}

export default Banner;
