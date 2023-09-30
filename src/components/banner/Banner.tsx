import "./Banner.css";
import logoMedium from "/purchaseway-medium-logo.png";

function Banner() {
    return (
        <section className="banner">
            <div className="title">
                Conheça a empresa inovadora em serviços para a web
            </div>
            <a href="/" className="logo-medium">
                <img src={logoMedium} alt="purchaseway-medium-logo" />
            </a>
        </section>
    );
}

export default Banner;
