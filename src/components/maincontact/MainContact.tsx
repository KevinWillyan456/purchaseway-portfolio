import "./MainContact.css";

function MainContact() {
    return (
        <main className="main-contact">
            <section className="main-content">
                <div className="main-banner">
                    <div className="main-highlight">
                        <div className="cover">
                            <img
                                src="/purchaseway-medium-logo.png"
                                alt="Logo"
                            />
                        </div>
                        <div className="description">
                            A Purchaseway é uma empresa inovadora que se destaca
                            por criar soluções digitais de alto desempenho que
                            atendem a diversas paixões e interesses.
                        </div>
                    </div>
                    <div className="main-form">
                        <form className="main-form-tag">
                            <div className="title">Formulário de Contato</div>
                            <input type="text" placeholder="Digite seu nome" />
                            <input
                                type="text"
                                placeholder="Digite seu sobrenome"
                            />
                            <input
                                type="text"
                                placeholder="Insira um endereço de e-mail válidob"
                            />
                            <textarea placeholder="Digite sua mensagem"></textarea>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainContact;
