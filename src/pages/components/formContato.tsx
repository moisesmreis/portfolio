import React from "react";
import ButtonCta from "./buttonCta";

interface Props {
    children?: React.ReactNode;
}

const FormContato: React.FC<Props> = ({ children }) => {
    return (
        <form>
            <div className="mb-6">
                <label htmlFor="name" className="form-label">Seu nome</label>
                <input type="name" id="name" className="form-wrap" placeholder="João Oliveira" required></input>
                <p className="form-helper">É só inserir o seu nome e último sobrenome</p>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="form-label">Seu e-mail</label>
                <input type="email" id="email" className="form-wrap" placeholder="seunome@seuemail.com" required></input>
                <p className="form-helper">Preencha com um endereço de e-mail válido</p>
            </div>
            <div className="mb-6">
                <label htmlFor="tel" className="form-label">Seu número de WhatsApp</label>
                <input type="tel" id="tel" className="form-wrap" placeholder="+99 (99) 99999-9999" required></input>
                <p className="form-helper">É opcional, mas seria muito bom se pudesse fornecer seu número de WhatsApp</p>
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="form-label">De que você precisa?</label>
                <textarea id="message" rows={8} className="form-wrap" placeholder="Eu queria um website que pudesse..."></textarea>
            </div>
            <ButtonCta>Fale comigo ✨</ButtonCta>
        </form>
    );
}

export default FormContato;
