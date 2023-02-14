import Link from "next/link";

const Contact = () => {
    return (
        <>
            <section className="px-12" id="home-contact">
                <div className="flex-col-start gap-1">
                    <Link href="tel:5574999587898">
                        <span className="underline text-sm">+55 (74) 99958-7898</span>
                    </Link>
                    <Link href="mailto:contato@lamonhang.com">
                    <span className="underline text-sm">contato@lamonhang.com</span>
                    </Link>
                    <span className="form-helper max-w-[36rem]">Eu trabalho <i>online</i> e estou disponível sempre que possível, você pode enviar um e-mail com detalhes da sua ideia ou projeto ou pode me enviar uma mensagem no <b>WhatsApp</b> para esse número de telefone ou clicando no botão lá em cima da página</span>
                </div>
            </section>
        </>
    );
};

export default Contact;