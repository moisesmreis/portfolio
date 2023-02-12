import Link from "next/link"
import ButtonLight from "../components/buttonLight"
import ButtonIcon from "../components/buttonIcon"
import { SunIcon, MoonIcon, TwitterLogoIcon, GitHubLogoIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";

export default function Header() {

    const { theme, setTheme } = useTheme()

    return (
        <>
            <header className="grid-header" id="header-wrapper">
                <div className="flex-sub-header justify-start" id="header-logo">
                    <Link href="/">
                        <span className="title-logo">LM.</span>
                    </Link>
                </div>
                <div className="flex-sub-header justify-end" id="header-social">
                    <Link className="!hidden xl:!block w-fit" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonLight childIcon={<TwitterLogoIcon />}>Twitter</ButtonLight>
                    </Link>
                    <Link className="!hidden xl:!block w-fit" href="https://github.com/moisesmreis">
                        <ButtonLight childIcon={<GitHubLogoIcon />}>GitHub</ButtonLight>
                    </Link>
                    <Link className="!block xl:!hidden w-fit" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonIcon childIcon={<TwitterLogoIcon />} />
                    </Link>
                    <Link className="!block xl:!hidden w-fit" href="https://github.com/moisesmreis">
                        <ButtonIcon childIcon={<GitHubLogoIcon />} />
                    </Link>
                    {theme === 'light' ? (
                        <ButtonLight childIcon={<MoonIcon />} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Dark</ButtonLight>
                    ) : (
                        <ButtonLight childIcon={<SunIcon />} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Light</ButtonLight>
                    )}
                </div>
            </header>
        </>
    )
}
