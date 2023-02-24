import Link from "next/link"
import ButtonMain from "./buttonMain"
import ButtonIcon from "./buttonIcon"
import Logo from "./logo"
import { SunIcon, MoonIcon, TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react'

export default function Header() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
        <>
            <header className="grid grid-cols-2" id="header-wrapper">
                <div className="flex flex-row content-center items-center px-6 xl:px-12 py-6 gap-6 justify-start" id="header-logo">
                    <Logo />
                </div>
                <div className="flex flex-row content-center items-center px-6 xl:px-12 py-6 gap-6 justify-end" id="header-social">
                    <Link className="!hidden xl:!block w-fit" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonMain aria-label="Twitter" childIcon={<TwitterLogoIcon />}>Twitter</ButtonMain>
                    </Link>
                    <Link className="!hidden xl:!block w-fit" href="https://github.com/moisesmreis">
                        <ButtonMain aria-label="Github" childIcon={<GitHubLogoIcon />}>GitHub</ButtonMain>
                    </Link>
                    <Link className="!block xl:!hidden w-fit" href="https://twitter.com/MoissMoreiraRe1">
                        <ButtonIcon aria-label="Twitter" childIcon={<TwitterLogoIcon />} />
                    </Link>
                    <Link className="!block xl:!hidden w-fit" href="https://github.com/moisesmreis">
                        <ButtonIcon aria-label="Github" childIcon={<GitHubLogoIcon />} />
                    </Link>
                    {theme === 'light' ? (
                        <ButtonMain aria-label="Dark" childIcon={<MoonIcon />} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Dark</ButtonMain>
                    ) : (
                        <ButtonMain aria-label="Light" childIcon={<SunIcon />} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Light</ButtonMain>
                    )}
                </div>
            </header>
        </>
    )
}
