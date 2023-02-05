import ButtonLight from "../components/buttonLight"
import Twitter from '@/pages/content/twitter.svg'
import Github from '@/pages/content/github.svg'
import ArrowRight from '@/pages/content/arrow-right.svg'
import Sun from '@/pages/content/sun.svg'
import Moon from '@/pages/content/moon.svg'

export default function Header() {
    return (
        <>
            <header className="grid-two-four" id="header-wrapper">
                <div className="flex-sub-header" id="header-logo">
                    <span className="title-logo">La Monhang</span>
                </div>
                <div className="flex-sub-header" id="header-lang">
                    <ButtonLight image={ArrowRight}>Port</ButtonLight>
                    <ButtonLight image={ArrowRight}>Eng</ButtonLight>
                </div>
                <div className="flex-sub-header" id="header-theme">
                    <ButtonLight image={Sun}>Light</ButtonLight>
                    <ButtonLight image={Moon}>Dark</ButtonLight>
                </div>
                <div className="flex-sub-header" id="header-social">
                    <ButtonLight image={Twitter}>Twitter</ButtonLight>
                    <ButtonLight image={Github}>GitHub</ButtonLight>
                </div>
            </header>
        </>
    )
}
