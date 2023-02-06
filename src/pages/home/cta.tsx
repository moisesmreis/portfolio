import Badge from "../components/badge"
import ImageGroup from "../components/imageGroup";
import Salvador from "@/pages/content/0dsF6RW8ewk.jpg"
import Chapada from "@/pages/content/IA0-dP_hnbI.jpg"
import Caatinga from "@/pages/content/v7xwQcq3tCl.jpg"

const Cta = () => {  
    return (
        <>
            <section className="grid-cta" id="home-cta">
                <div className="flex-center-cta">
                    <div id="cta-title">
                        <h1 className="title-big">Meu nome é Moisés Reis e sou um <span className="underline decoration-2">web dev</span> e estudante da Chapada Diamantina</h1>
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
                    <ImageGroup image_left={Salvador} image_middle={Chapada} image_right={Caatinga}></ImageGroup>
                </div>
            </section>
        </>
    );
};

export default Cta;