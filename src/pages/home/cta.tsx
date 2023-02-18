import Link from 'next/link';
import Badge from "../../components/badge"
import ButtonMain from '../../components/buttonMain';

const Cta = () => {
    return (
        <>
            <section className="grid-cta" id="home-cta">
                <div className="flex-center-cta">
                    <header id="cta-title">
                        <h1 className="title-big">Meu nome é Moisés Reis e sou um <span className="underline decoration-3">web developer e designer</span> da Chapada Diamantina</h1>
                    </header>
                    <div className="flex-row-start flex-wrap gap-4" id="cta-badge">
                        <Badge>React</Badge>
                        <Badge>Vue</Badge>
                        <Badge>WordPress</Badge>
                        <Badge>Tailwind CSS</Badge>
                        <Badge>Bootstrap</Badge>
                        <Badge>Nuxt.js</Badge>
                        <Badge>UI</Badge>
                        <Badge>UX</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Svelte</Badge>
                        <Badge>Solid</Badge>
                    </div>
                </div>
                <div className="flex-center-cta">
                    <Link className="w-fit" href="https://wa.me/5574999587898?text=Opa!%20Que%20tal%20come%C3%A7armos%20a%20conversar%20e%20discutirmos%20seu%20projeto%3F%20Me%20fale%20o%20que%20voc%C3%AA%20precisa%20%F0%9F%90%95%E2%80%8D%F0%9F%A6%BA">
                        <ButtonMain aria-label="Contato">Me mande uma mensagem ✨</ButtonMain>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Cta;