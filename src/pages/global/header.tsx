import ButtonLight from "../components/buttonLight"
import { SunIcon, MoonIcon, TwitterLogoIcon, GitHubLogoIcon, ArrowRightIcon } from "@radix-ui/react-icons"

export default function Header() {
    return (
        <>
            <header className="grid-two-four" id="header-wrapper">
                <div className="flex-sub-header" id="header-logo">
                    <span className="title-logo">La Monhang</span>
                </div>
                <div className="flex-sub-header" id="header-lang">
                    <ButtonLight childIcon={<ArrowRightIcon />}>Port</ButtonLight>
                    <ButtonLight childIcon={<ArrowRightIcon />}>Eng</ButtonLight>
                </div>
                <div className="flex-sub-header" id="header-theme">
                    <ButtonLight childIcon={<SunIcon />}>Light</ButtonLight>
                    <ButtonLight childIcon={<MoonIcon />}>Dark</ButtonLight>
                </div>
                <div className="flex-sub-header" id="header-social">
                    <ButtonLight childIcon={<TwitterLogoIcon />}>Twitter</ButtonLight>
                    <ButtonLight childIcon={<GitHubLogoIcon />}>GitHub</ButtonLight>
                </div>
            </header>
        </>
    )
}
