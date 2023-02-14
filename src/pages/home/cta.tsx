import Link from 'next/link';
import Badge from "../components/badge"
import ButtonMain from '../components/buttonMain';

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
                        <Badge>Sendgrid</Badge>
                        <Badge>UI</Badge>
                        <Badge>UX</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>Svelte</Badge>
                        <Badge>Solid</Badge>
                    </div>
                </div>
                <div className="flex-center-cta">
                    <Link className="w-fit" href="/contato">
                        <ButtonMain>Me mande uma mensagem 📲</ButtonMain>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Cta;