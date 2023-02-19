import CardCta from "@/components/cardCta";

const Nav = () => {
    return (
        <>
            <section className="px-6 xl:px-12" id="home-nav">
                <div className="grid-nav">
                    <CardCta title="Landing pages 🚀" content="Como especialista em tecnologia, sei da importância de ter uma página de destino atraente, rápida e fácil de usar para maximizar a conversão de seus visitantes. Usando o React como base e o Tailwind CSS para a UI, desenvolvo landing pages personalizadas e otimizadas para seus objetivos de negócios" />
                    <CardCta title="Blogs 📰" content="Eu entendo o valor de ter um blog bem estruturado e atraente para o seu público-alvo. Utilizo o WordPress, a plataforma de blogs mais popular do mundo, para criar blogs personalizados e profissionais que ajudam a construir sua marca e aumentar sua presença online" />
                    <CardCta title="E-commerce 🛒" content="Combino a plataforma de comércio eletrônico mais popular do planeta, o WordPress, com design personalizado para criar uma solução única e eficiente para suas necessidades de negócios. Não importa se você vende produtos físicos ou digitais, posso ajudá-lo a construir uma loja online atraente, segura e fácil de usar para seus clientes" />
                </div>
            </section>
        </>
    );
};

export default Nav;