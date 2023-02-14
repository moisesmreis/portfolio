import Badge from "../../../components/badge";

const Nav = () => {
    return (
        <>
            <section className="px-6 xl:px-12" id="home-nav">
                <div className="grid-nav">
                    <div className="bg-[#6e57b2] grid-sub-nav">
                        <h2 className="title-nav">Landing pages 🚀</h2>
                        <p className="text-white lowercase">Como especialista em tecnologia, sei da importância de ter uma página de destino atraente, rápida e fácil de usar para maximizar a conversão de seus visitantes. Usando o React como base e o Tailwind CSS para a UI, desenvolvo landing pages personalizadas e otimizadas para seus objetivos de negócios</p>
                        <div className="flex-row-start flex-wrap gap-4" id="nav-badge">
                            <Badge>React</Badge>
                            <Badge>Vue</Badge>
                            <Badge>Tailwind CSS</Badge>
                        </div>
                    </div>
                    <div className="bg-[#fc440f] grid-sub-nav">
                        <h2 className="title-nav">Blogs 📰</h2>
                        <p className="text-white lowercase">Nós entendemos o valor de ter um blog bem estruturado e atraente para o seu público-alvo. Nós usamos o WordPress, a plataforma de blog mais popular do mundo, para criar blogs personalizados e profissionais que ajudam a construir sua marca e aumentar sua presença online</p>
                        <div className="flex-row-start flex-wrap gap-4" id="nav-badge">
                            <Badge>WordPress</Badge>
                            <Badge>Tailwind CSS</Badge>
                            <Badge>Umino</Badge>
                        </div>
                    </div>
                    <div className="bg-[#00072d] grid-sub-nav">
                        <h2 className="title-nav">E-commerce 🛒</h2>
                        <p className="text-white lowercase">Combinamos a plataforma de comércio eletrônico mais popular do mundo, o WordPress, com design personalizado para criar uma solução única e eficiente para suas necessidades de negócios. Não importa se você vende produtos físicos ou digitais, nós podemos ajudá-lo a construir uma loja online atraente, segura e fácil de usar para seus clientes</p>
                        <div className="flex-row-start flex-wrap gap-4" id="nav-badge">
                            <Badge>React</Badge>
                            <Badge>Tailwind CSS</Badge>
                            <Badge>WordPress</Badge>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Nav;