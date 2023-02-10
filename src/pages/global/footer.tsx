import ButtonBasic from "../components/buttonBasic"
export default function Footer() {
    return (
        <>
            <footer className="flex flex-col lg:flex-row justify-start lg:justify-between px-12 gap-6 lg:gap-12">
                <div className="py-6 flex-col lg:flex-row-center gap-12">
                    <ButtonBasic>Início</ButtonBasic>
                    <ButtonBasic>Contato</ButtonBasic>
                    <ButtonBasic>Github</ButtonBasic>
                    <ButtonBasic>Linkedin</ButtonBasic>
                    <ButtonBasic>Twitter</ButtonBasic>
                </div>
                <div className="py-6 justify-start lg:flex-row-center">
                    <span className="text-sm">Copyright © 2023 La Monhang.</span>
                </div>
            </footer>
        </>
    )
}
