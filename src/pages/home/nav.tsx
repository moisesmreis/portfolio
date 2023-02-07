import ButtonBasic from "../components/buttonBasic";

const Nav = () => {
    return (
        <>
            <section className="p-12" id="home-nav">
                <nav className="grid grid-cols-8 grid-rows-6 gap-6">
                    <div className="rounded-lg hover:rounded-3xl bg-[#6e57b2] transition-all grid p-6 col-span-4 row-span-6">
                        <h2 className="title-nav">landing pages</h2>
                        <ButtonBasic>fale comigo</ButtonBasic>
                    </div>
                    <div className="rounded-lg hover:rounded-3xl bg-[#c5283d] transition-all grid p-6 col-span-2 row-span-3">
                        <h2 className="title-nav">blogs</h2>
                        <ButtonBasic>fale comigo</ButtonBasic>
                    </div>
                    <div className="rounded-lg hover:rounded-3xl bg-[#f6ae2d] transition-all grid p-6 col-span-2 row-span-3">
                        <h2 className="title-nav">serviços</h2>
                        <ButtonBasic>fale comigo</ButtonBasic>
                    </div>
                    <div className="rounded-lg hover:rounded-3xl bg-[#4a5240] transition-all grid p-6 col-span-4 row-span-3">
                        <h2 className="title-nav">e-commerces</h2>
                        <ButtonBasic>fale comigo</ButtonBasic>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Nav;