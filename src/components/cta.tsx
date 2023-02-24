import Link from 'next/link';
import Badge from "./badge"
import ButtonMain from './buttonMain';

const Cta = () => {
    return (
        <>
            <section className="grid p-6 xl:px-12 content-center gap-6 mb-6" id="home-cta">
                <div className="flex flex-col justify-center content-center gap-6 relative">
                    <header id="cta-title">
                        <h1 className="text-4xl lg:text-5xl 2xl:text-6xl leading-snug font-black">Meu nome é Moisés Reis e sou um <span className="underline decoration-3">web developer e designer</span> da Chapada Diamantina</h1>
                    </header>
                    <div className="flex flex-row content-center justify-start items-center flex-wrap gap-4" id="cta-badge">
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
                <div className="flex flex-col justify-center content-center gap-6 relative">
                    <Link className="w-fit" href="https://wa.me/5574999587898?text=Opa!%20Que%20tal%20come%C3%A7armos%20a%20conversar%20e%20discutirmos%20seu%20projeto%3F%20Me%20fale%20o%20que%20voc%C3%AA%20precisa%20%F0%9F%90%95%E2%80%8D%F0%9F%A6%BA">
                        <ButtonMain aria-label="Contato">Me mande uma mensagem ✨</ButtonMain>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Cta;