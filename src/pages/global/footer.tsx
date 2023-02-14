import ButtonBasic from "../../components/buttonBasic"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="flex-footer-wrap">
                <div className="flex-sub-footer-top">
                    <Link className="w-fit" href="/">
                        <ButtonBasic>Início</ButtonBasic>
                    </Link>
                    <Link className="w-fit" href="/contato">
                        <ButtonBasic>Contato</ButtonBasic>
                    </Link>
                    <Link className="w-fit" href="https://github.com/moisesmreis">
                        <ButtonBasic>Github</ButtonBasic>
                    </Link>
                    <Link className="w-fit" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonBasic>Twitter</ButtonBasic>
                    </Link>
                    <Link className="w-fit" href="https://www.linkedin.com/in/moisesmoreirareis/">
                        <ButtonBasic>Linkedin</ButtonBasic>
                    </Link>
                </div>
                <div className="flex-sub-footer-bottom">
                    <span className="text-sm">Copyright © 2023 La Monhang.</span>
                </div>
            </footer>
        </>
    )
}
