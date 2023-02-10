import Link from 'next/link';
import Badge from "../components/badge"
import ButtonCta from "../components/buttonCta";

const Cta = () => {
    return (
        <>
            <section className="grid-cta" id="home-cta">
                <div className="flex-center-cta">
                    <div id="cta-title">
                        <h1 className="title-big">Meu nome é Moisés Reis e sou um <span className="underline decoration-3">web developer e designer</span> da Chapada Diamantina</h1>
                    </div>
                    <div className="flex-row-start flex-wrap gap-4" id="cta-badge">
                        <Badge>React</Badge>
                        <Badge>Vue</Badge>
                        <Badge>WordPress</Badge>
                        <Badge>Tailwind CSS</Badge>
                        <Badge>UI</Badge>
                        <Badge>UX</Badge>
                    </div>
                </div>
                <div className="flex-center-cta">
                    <Link href="/contato">
                        <ButtonCta>Fale comigo 👋</ButtonCta>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Cta;