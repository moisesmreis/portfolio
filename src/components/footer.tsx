import ButtonBasic from "./buttonBasic"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="flex flex-col md:flex-row justify-start md:justify-between px-6 xl:px-12 gap-6 xl:gap-12 mt-12 md:mt-0">
                <div className="py-0 xl:py-6 flex flex-col md:flex-row content-center justify-center md:items-center gap-4 md:gap-12">
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
                <div className="pt-0 md:pt-6 pb-6 xl:py-6 mt-4 md:mt-0 justify-start flex flex-row content-center md:justify-center items-center">
                    <span className="text-sm">Copyright © 2023 La Monhang.</span>
                </div>
            </footer>
        </>
    )
}
