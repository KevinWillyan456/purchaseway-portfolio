import { FormEvent, useState } from "react";
import validator from "validator";
import "./MainContact.css";

function MainContact() {
    const [nameInput, setNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");

    const [nameInputEmpty, setNameInputEmpty] = useState(false);
    const [lastNameInputEmpty, setLastNameInputEmpty] = useState(false);
    const [emailInputEmpty, setEmailInputEmpty] = useState(false);
    const [messageInputEmpty, setMessageInputEmpty] = useState(false);

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (nameInput === "") {
            setNameInputEmpty(true);
        }
        if (nameInput) {
            setNameInputEmpty(false);
        }
        if (lastNameInput === "") {
            setLastNameInputEmpty(true);
        }
        if (lastNameInput) {
            setLastNameInputEmpty(false);
        }
        if (validator.isEmail(emailInput)) {
            setEmailInputEmpty(false);
        } else {
            setEmailInputEmpty(true);
        }
        if (messageInput === "") {
            setMessageInputEmpty(true);
        }
        if (messageInput) {
            setMessageInputEmpty(false);
        }
        if (
            !nameInput ||
            !lastNameInput ||
            !validator.isEmail(emailInput) ||
            !messageInput
        ) {
            return;
        }

        setNameInput("");
        setLastNameInput("");
        setEmailInput("");
        setMessageInput("");
        alert("Enviado com sucesso!");
    };

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
                        <form
                            className="main-form-tag"
                            onSubmit={handleFormSubmit}
                        >
                            <div className="title">Formulário de Contato</div>
                            <div className="field">
                                {nameInputEmpty && (
                                    <div className="validate-message">
                                        Preencha o campo nome
                                    </div>
                                )}
                                <input
                                    type="text"
                                    placeholder="Digite seu nome"
                                    value={nameInput}
                                    onChange={(e) => {
                                        setNameInput(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="field">
                                {lastNameInputEmpty && (
                                    <div className="validate-message">
                                        Preencha o campo sobrenome
                                    </div>
                                )}
                                <input
                                    type="text"
                                    placeholder="Digite seu sobrenome"
                                    value={lastNameInput}
                                    onChange={(e) => {
                                        setLastNameInput(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="field">
                                {emailInputEmpty && (
                                    <div className="validate-message">
                                        Este e-mail é inválido
                                    </div>
                                )}
                                <input
                                    type="text"
                                    placeholder="Insira um endereço de e-mail válido"
                                    value={emailInput}
                                    onChange={(e) => {
                                        setEmailInput(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="field">
                                {messageInputEmpty && (
                                    <div className="validate-message">
                                        Preencha o campo mensagem
                                    </div>
                                )}
                                <textarea
                                    placeholder="Digite sua mensagem"
                                    maxLength={2000}
                                    value={messageInput}
                                    onChange={(e) => {
                                        setMessageInput(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainContact;
