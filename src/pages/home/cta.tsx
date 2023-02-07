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
                    <div className="flex-row-start gap-4" id="cta-badge">
                        <Badge>_/React/_</Badge>
                        <Badge>_/Vue/_</Badge>
                        <Badge>_/WordPress/_</Badge>
                        <Badge>_/Tailwind CSS/_</Badge>
                        <Badge>_/UI/_</Badge>
                        <Badge>_/UX/_</Badge>
                    </div>                    
                </div>
                <div className="flex-center-cta">
                    <ButtonCta>Fale comigo</ButtonCta>
                </div>
            </section>
        </>
    );
};

export default Cta;