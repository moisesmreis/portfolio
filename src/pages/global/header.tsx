import Link from "next/link"
import ButtonLight from "../components/buttonLight"
import ButtonIcon from "../components/buttonIcon"
import { SunIcon, MoonIcon, TwitterLogoIcon, GitHubLogoIcon, ArrowRightIcon } from "@radix-ui/react-icons"

export default function Header() {
    return (
        <>
            <header className="grid-header" id="header-wrapper">
                <div className="flex-sub-header" id="header-logo">
                    <Link href="/"><span className="title-logo">La Monhang</span></Link>
                </div>
                <div className="!hidden lg:!flex flex-sub-header" id="header-lang">
                    <ButtonLight childIcon={<ArrowRightIcon />}>Port</ButtonLight>
                    <ButtonLight childIcon={<ArrowRightIcon />}>Eng</ButtonLight>
                </div>
                <div className="!hidden lg:!flex flex-sub-header" id="header-theme">
                    <ButtonLight childIcon={<SunIcon />}>Light</ButtonLight>
                    <ButtonLight childIcon={<MoonIcon />}>Dark</ButtonLight>
                </div>
                <div className="flex-sub-header" id="header-social">
                    <Link className="!hidden lg:!block" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonLight childIcon={<TwitterLogoIcon />}>Twitter</ButtonLight>
                    </Link>
                    <Link className="!hidden lg:!block" href="https://github.com/moisesmreis">
                        <ButtonLight childIcon={<GitHubLogoIcon />}>GitHub</ButtonLight>
                    </Link>
                    <Link className="!block lg:!hidden" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonIcon childIcon={<TwitterLogoIcon />} />
                    </Link>
                    <Link className="!block lg:!hidden" href="https://github.com/moisesmreis">
                        <ButtonIcon childIcon={<GitHubLogoIcon />} />
                    </Link>
                </div>
            </header>
        </>
    )
}
