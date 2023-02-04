export default function Header() {
    return (
        <>
            <header className="grid grid-cols-2 md:grid-cols-4" id="header-wrapper">
                <div className="flex flex-row p-6 content-center justify-center items-center" id="header-logo">
                    <span className="select-none font-black tracking-widest uppercase">La Monhang</span>
                </div>
                <div className="hidden md:flex flex-row p-6 content-center justify-center items-center" id="header-lang">                    
                </div>
                <div className="hidden md:flex flex-row p-6 content-center justify-center items-center" id="header-theme">                    
                </div>
                <div className="hidden md:flex flex-row p-6 content-center justify-center items-center" id="header-social">
                </div>
                <div className="flex md:hidden flex-row p-6 content-center justify-center items-center" id="header-menu">
                </div>
            </header>
        </>
    )
}
