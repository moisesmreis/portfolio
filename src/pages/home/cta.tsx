import Badge from "../components/badge"
import React, { useState, useEffect } from 'react';

const Cta = () => {
    
    useEffect(() => {
    }, []);

    return (
        <>
            <section className="grid-cta" id="home-cta">
                <div className="flex-sub-cta">
                    <div id="cta-title">
                        <h1 className="title-big">Meu nome é Moisés Reis e sou um estudante da Chapada Diamantina</h1>
                    </div>
                    <div className="flex-row-start" id="cta-badge">
                        <Badge>React</Badge>
                        <Badge>Vue</Badge>
                        <Badge>WordPress</Badge>
                        <Badge>Tailwind CSS</Badge>
                        <Badge>UI</Badge>
                        <Badge>UX</Badge>
                    </div>
                </div>
                <div className="flex-sub-cta">
                </div>
            </section>
        </>
    );
};

export default Cta;