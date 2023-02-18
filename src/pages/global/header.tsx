import Link from "next/link"
import ButtonMain from "../../components/buttonMain"
import ButtonIcon from "../../components/buttonIcon"
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
            <header className="grid-header" id="header-wrapper">
                <div className="flex-sub-header justify-start" id="header-logo">
                    <Link className="w-fit" href="/">
                        <svg aria-label="Homepage" width="36px" height="36px" viewBox="0 0 264 264" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <path className="stroke-neutral-400 dark:stroke-[#fafafa]" d="M128 256C57.3074 256 -8.35886e-05 198.692 1.52638e-06 128C8.66413e-05 57.3074 57.3077 -4.57764e-05 128 3.05176e-05C181.732 9.15527e-05 227.732 33.1083 246.711 80.0372L189.07 108.857Q188.691 107.648 188.265 106.455Q187.838 105.262 187.365 104.086Q186.891 102.911 186.372 101.755Q185.852 100.599 185.287 99.4651Q184.722 98.3308 184.113 97.2198Q183.503 96.1087 182.85 95.0227Q182.197 93.9367 181.502 92.8773Q180.806 91.818 180.07 90.787Q179.333 89.7561 178.556 88.7551Q177.779 87.7541 176.963 86.7846Q176.147 85.8151 175.293 84.8787Q174.439 83.9424 173.549 83.0405Q172.659 82.1386 171.733 81.2727Q170.808 80.4068 169.85 79.5782Q168.891 78.7496 167.9 77.9596Q166.909 77.1695 165.888 76.4194Q164.867 75.6692 163.816 74.96Q162.766 74.2509 161.689 73.5839Q160.611 72.9168 159.508 72.293Q158.405 71.6691 157.279 71.0894Q156.152 70.5097 155.003 69.9751Q153.854 69.4404 152.685 68.9517Q151.516 68.4629 150.328 68.0209Q149.14 67.5788 147.936 67.184Q146.732 66.7893 145.513 66.4426Q144.294 66.0958 143.063 65.7976Q141.831 65.4994 140.589 65.2501Q139.346 65.0009 138.095 64.801Q136.844 64.6012 135.585 64.451Q134.327 64.3008 133.064 64.2006Q131.801 64.1003 130.535 64.0501Q129.268 64 128.001 64L127.999 64Q126.428 64 124.859 64.0771Q123.29 64.1541 121.726 64.3081Q120.163 64.4621 118.608 64.6926Q117.054 64.9232 115.513 65.2297Q113.973 65.5362 112.449 65.9179Q110.925 66.2997 109.421 66.7557Q107.918 67.2118 106.438 67.7411Q104.959 68.2703 103.508 68.8716Q102.056 69.4728 100.636 70.1445Q99.2157 70.8162 97.8301 71.5568Q96.4446 72.2974 95.097 73.1051Q93.7494 73.9128 92.4431 74.7857Q91.1368 75.6585 89.8749 76.5944Q88.613 77.5303 87.3985 78.527Q86.184 79.5237 85.02 80.5788Q83.8558 81.6339 82.7449 82.7448Q81.634 83.8557 80.5789 85.0198Q79.5238 86.1839 78.5271 87.3984Q77.5305 88.6128 76.5946 89.8747Q75.6587 91.1366 74.7858 92.443Q73.9129 93.7493 73.1053 95.0968Q72.2976 96.4444 71.5569 97.83Q70.8163 99.2156 70.1446 100.636Q69.4729 102.056 68.8717 103.508Q68.2704 104.959 67.7411 106.438Q67.2118 107.918 66.7558 109.421Q66.2997 110.924 65.918 112.448Q65.5362 113.972 65.2297 115.513Q64.9232 117.054 64.6927 118.608Q64.4622 120.162 64.3082 121.726Q64.1542 123.289 64.0771 124.859Q64 126.428 64 127.999L64 128.001Q64 129.572 64.0771 131.141Q64.1542 132.71 64.3082 134.274Q64.4622 135.837 64.6927 137.391Q64.9232 138.946 65.2297 140.486Q65.5362 142.027 65.9179 143.551Q66.2997 145.075 66.7557 146.579Q67.2118 148.082 67.7411 149.561Q68.2704 151.041 68.8716 152.492Q69.4728 153.944 70.1445 155.364Q70.8163 156.784 71.5569 158.17Q72.2975 159.555 73.1052 160.903Q73.9129 162.251 74.7857 163.557Q75.6586 164.863 76.5945 166.125Q77.5304 167.387 78.5271 168.601Q79.5237 169.816 80.5788 170.98Q81.6339 172.144 82.7448 173.255Q83.8557 174.366 85.0198 175.421Q86.1839 176.476 87.3984 177.473Q88.6129 178.469 89.8748 179.405Q91.1367 180.341 92.443 181.214Q93.7493 182.087 95.0969 182.895Q96.4444 183.702 97.83 184.443Q99.2156 185.184 100.636 185.855Q102.056 186.527 103.508 187.128Q104.959 187.73 106.438 188.259Q107.918 188.788 109.421 189.244Q110.924 189.7 112.448 190.082Q113.972 190.464 115.513 190.77Q117.054 191.077 118.608 191.307Q120.162 191.538 121.726 191.692Q123.289 191.846 124.859 191.923Q126.428 192 127.999 192L128.001 192Q129.268 192 130.534 191.95Q131.801 191.9 133.064 191.799Q134.327 191.699 135.585 191.549Q136.843 191.399 138.095 191.199Q139.346 190.999 140.589 190.75Q141.831 190.501 143.063 190.202Q144.294 189.904 145.513 189.557Q146.732 189.211 147.936 188.816Q149.14 188.421 150.328 187.979Q151.515 187.537 152.684 187.048Q153.854 186.56 155.002 186.025Q156.151 185.49 157.278 184.911Q158.405 184.331 159.508 183.707Q160.611 183.083 161.688 182.416Q162.766 181.749 163.816 181.04Q164.866 180.331 165.888 179.581Q166.909 178.831 167.9 178.041Q168.89 177.251 169.849 176.422Q170.808 175.593 171.733 174.728Q172.658 173.862 173.549 172.96Q174.439 172.058 175.292 171.122Q176.146 170.185 176.962 169.216Q177.778 168.246 178.555 167.245Q179.332 166.244 180.069 165.213Q180.806 164.182 181.502 163.123Q182.197 162.064 182.85 160.978Q183.503 159.892 184.112 158.781Q184.722 157.67 185.287 156.535Q185.852 155.401 186.371 154.245Q186.891 153.09 187.365 151.914Q187.838 150.739 188.265 149.546Q188.691 148.352 189.07 147.143L246.711 175.964C227.731 222.892 181.732 256 128 256Z" id="path_1" />
                                <rect width="264" height="264" id="artboard_1" />
                                <clipPath id="clip_1">
                                    <use xlinkHref="#artboard_1" clip-rule="evenodd" />
                                </clipPath>
                                <clipPath id="clip_2">
                                    <use xlinkHref="#path_1" />
                                </clipPath>
                            </defs>
                            <g id="logo" clip-path="url(#clip_1)">
                                <use xlinkHref="#artboard_1" stroke="none" fill="#FFFFFF" fill-opacity="0" />
                                <g id="logo" transform="matrix(1.1483816E-06 1 -1 1.1483816E-06 260.99982 3.999878)">
                                    <g id="donut">
                                        <use stroke="none" fill="#D3D3D3" fill-opacity="0" xlinkHref="#path_1" fill-rule="evenodd" />
                                        <g clip-path="url(#clip_2)">
                                            <use xlinkHref="#path_1" fill="none" stroke="#A3A3A3" stroke-width="24" />
                                        </g>
                                    </g>
                                </g>
                                <g id="logo-2" transform="matrix(0.798633 -0.6018183 0.6018183 0.798633 -46.25763 106.80786)">
                                    <g id="donut">
                                        <use stroke="none" fill="#D3D3D3" fill-opacity="0" xlinkHref="#path_1" fill-rule="evenodd" />
                                        <g clip-path="url(#clip_2)">
                                            <use xlinkHref="#path_1" fill="none" stroke="#A3A3A3" stroke-width="24" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                </div>
                <div className="flex-sub-header justify-end" id="header-social">
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
