import ButtonBasic from "../../components/buttonBasic"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="flex-footer-wrap">
                <div className="flex-sub-footer-top">
                    <Link className="w-fit" href="/">
                        <ButtonBasic aria-label="Homepage">Início</ButtonBasic>
                    </Link>
                    <Link className="w-fit" href="https://github.com/moisesmreis">
                        <ButtonBasic aria-label="Github">Github</ButtonBasic>
                    </Link>
                    <Link className="w-fit" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonBasic aria-label="Twitter">Twitter</ButtonBasic>
                    </Link>
                    <Link className="w-fit" href="https://www.linkedin.com/in/moisesmoreirareis/">
                        <ButtonBasic aria-label="Linkedin">Linkedin</ButtonBasic>
                    </Link>
                </div>
                <div className="flex-sub-footer-bottom">
                    <span className="text-sm">Copyright © 2023 La Monhang.</span>
                </div>
            </footer>
        </>
    )
}
