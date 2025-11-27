import { NavbarStyles } from "@/css"

export default function Navbar(){

    return(
        <nav className="flex items-center justify-between text-white px-[5vw] py-[2vh] fixed z-10 w-screen bg-[#1a1a1a]">
            <div>
                <span className="text-2xl font-sixtyfour ">IMF</span>
            </div>

            <div className="flex gap-[20vw] font-bold">
                <a href="#intro" className={`${NavbarStyles.navButton}`}>About</a>
                <a href="#showcase" className={`${NavbarStyles.navButton}`} >Projects</a>
                <a href="#contacts" className={`${NavbarStyles.navButton}`}>Contacts</a>
            </div>
        </nav>
    )
}