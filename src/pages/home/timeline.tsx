const Timeline = () => {
    return (
        <>
            <section className="grid-timeline" id="home-timeline">
                <ol className="timeline-ol">
                    <li className="ml-6">
                        <span className="timeline-circle">😺</span>
                        <div className="timeline-wrap">
                            <div className="timeline-wrap-sub-flex">
                                <time className="timeline-time">Hoje</time>
                                <div className="timeline-text">Carreira  <span className="timeline-text-feat">autônoma</span></div>
                            </div>
                            <div className="timeline-wrap-desc">Estou estudando, construindo e trabalhando em projetos em <b>React</b>, <b>Vue</b> e <b>WordPress</b> e entregando trabalhos de forma autônoma com escalabilidade e segurança - como o <a href="https://lnoticias.com.br/" className="timeline-text-feat underline">LNotícas</a> - enquanto começo um bacharelado de Eng. de Software</div>
                        </div>
                    </li>
                    <li className="ml-6">
                        <span className="timeline-circle">🔥</span>
                        <div className="timeline-wrap">
                            <div className="timeline-wrap-sub-flex">
                                <time className="timeline-time">2020</time>
                                <div className="timeline-text">Voluntariado no  <a href="https://judasasbotasde.com.br/" className="timeline-text-feat underline">JUDAS, As botas de</a></div>
                            </div>
                            <div className="timeline-wrap-desc">Entre 2020 à 2023, eu, voluntariamente, ajudei a fundar o <b>JUDAS, As botas de</b>, uma plataforma de divulgação científica e cultural, mantido por pesquisadores do Brasil, Itália e Moçambique. Colaborei na promoção de eventos e ministrei um minicurso sobre <b>Mídias alternativas, espaços de resistência e o JUDAS, As botas de</b> no IFBA. Também estruturei toda a UI e implementei todas as funcionalidades presentes no website</div>
                        </div>
                    </li>
                    <li className="ml-6">
                        <span className="timeline-circle">⛏️</span>
                        <div className="timeline-wrap">
                            <div className="timeline-wrap-sub-flex">
                                <time className="timeline-time">2018</time>
                                <div className="timeline-text">Experiência na <span className="timeline-text-feat">Yamana Gold</span></div>
                            </div>
                            <div className="timeline-wrap-desc">Trabalhei como <i>Aprendiz</i> na <b>Yamana Gold</b> - embora não tenha sido alocado para o departamento de tecnologia, foi um experiência valiosa. Tive a chance de conhecer como funciona a estrutura de uma grande multinacional e, também, a oportunidade de trabalhar com pessoas de diversos nacionalidades</div>
                        </div>
                    </li>
                    <li className="ml-6">
                        <span className="timeline-circle">🎒</span>
                        <div className="timeline-wrap">
                            <div className="timeline-wrap-sub-flex">
                                <time className="timeline-time">2015</time>
                                <div className="timeline-text">Comecei meus estudos no <span className="timeline-text-feat">IFBA</span></div>
                            </div>
                            <div className="timeline-wrap-desc">Estudei <b>Informática com Ênfase na Tecnologia da Informação</b> no Instituto Federal de Educação, Ciência e Tecnologia da Bahia entre 2015 e 2019. Tive introduções de C#, Java, MySQL e web design - também participei da construção de um projeto que constituía na construção de um aplicativo para Android com o intuito de auxiliar crianças no estudo de Física</div>
                        </div>
                    </li>
                </ol>
            </section>
        </>
    );
};

export default Timeline;