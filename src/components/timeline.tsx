import TimelineList from "./timelineList";

const Timeline = () => {
    return (
        <>
            <section className="p-6 xl:px-12 mb-6" id="home-timeline">
                <ol className="relative flex flex-col gap-10 border-l border-neutral-200 dark:border-neutral-700">
                    <TimelineList emoji="😺" year="Hoje" title="Carreira" place="autônoma" content="Estou estudando, construindo e trabalhando em projetos em React, Vue e WordPress e entregando trabalhos de forma autônoma com escalabilidade e segurança - como o LNotícas - enquanto começo um bacharelado de Eng. de Software"/>
                    <TimelineList emoji="🔥" year="2020" title="Voluntariado no" place="JUDAS, As botas de" content="Entre 2020 à 2023, eu, voluntariamente, ajudei a fundar o JUDAS, As botas de, uma plataforma de divulgação científica e cultural, mantido por pesquisadores do Brasil, Itália e Moçambique. Colaborei na promoção de eventos e ministrei um minicurso sobre Mídias alternativas, espaços de resistência e o JUDAS, As botas de no IFBA. Também estruturei toda a UI e implementei todas as funcionalidades presentes no website"/>
                    <TimelineList emoji="⛏️" year="2018" title="Experiência na" place="Yamana Gold" content="Trabalhei como Aprendiz na Yamana Gold - embora não tenha sido alocado para o departamento de tecnologia, foi um experiência valiosa. Tive a chance de conhecer como funciona a estrutura de uma grande multinacional e, também, a oportunidade de trabalhar com pessoas de diversos nacionalidades"/>
                    <TimelineList emoji="🎒" year="2015" title="Comecei meus estudos no" place="IFBA" content="Estudei Informática com Ênfase na Tecnologia da Informação no Instituto Federal de Educação, Ciência e Tecnologia da Bahia entre 2015 e 2019. Tive introduções de C#, Java, MySQL e web design - também participei da construção de um projeto que constituía na construção de um aplicativo para Android com o intuito de auxiliar crianças no estudo de Física"/>
                </ol>
            </section>
        </>
    );
};

export default Timeline;