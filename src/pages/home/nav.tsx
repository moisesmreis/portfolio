const Nav = () => {
    return (
        <>
            <section className="px-12" id="home-nav">
                <nav className="grid-nav">
                    <div className="bg-[#6e57b2] grid-sub-nav col-span-2 row-span-6 rounded-tl-xl rounded-bl-xl">
                        <h2 className="title-nav">Landing pages 🚀</h2>
                        <p className="text-white lowercase">Como especialistas em tecnologia, entendemos a importância de ter uma página de destino atraente, rápida e fácil de usar para maximizar a conversão de seus visitantes. Usando o React como base de código e o Tailwind CSS como framework de estilo, nós criamos landing pages personalizadas e otimizadas para seus objetivos de negócios. Se você deseja vender produtos, coletar leads ou simplesmente apresentar sua marca, nós podemos ajudá-lo a alcançar seus objetivos de forma eficiente</p>
                    </div>
                    <div className="bg-[#fc440f] grid-sub-nav col-span-2 row-span-3">
                        <h2 className="title-nav">Blogs 📰</h2>
                        <p className="text-white lowercase">Nós entendemos o valor de ter um blog bem estruturado e atraente para o seu público-alvo. Nós usamos o WordPress, a plataforma de blog mais popular do mundo, para criar blogs personalizados e profissionais que ajudam a construir sua marca e aumentar sua presença online</p>
                    </div>
                    <div className="bg-[#00072d] grid-sub-nav col-span-2 row-span-3 rounded-tr-xl">
                        <h2 className="title-nav">E-commerce 🛒</h2>
                        <p className="text-white lowercase">Nós combinamos a plataforma de comércio eletrônico mais popular do mundo, o WordPress, com design personalizado para criar uma solução única e eficiente para suas necessidades de negócios. Não importa se você vende produtos físicos ou digitais, nós podemos ajudá-lo a construir uma loja online atraente, segura e fácil de usar para seus clientes</p>
                    </div>
                    <div className="bg-[#17301c] grid-sub-nav col-span-4 row-span-3 rounded-br-xl">
                        <h2 className="title-nav">Clínicas médicas 🏥</h2>
                        <p className="text-white lowercase">Entendemos a importância de ter um site profissional e bem estruturado para transmitir confiança e credibilidade aos seus pacientes. Nós criamos um site atraente, fácil de usar e totalmente adaptado às suas necessidades. Com informações claras sobre sua clínica, equipe e serviços, seus pacientes poderão facilmente encontrar tudo o que precisam e agendar consultas com você</p>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Nav;