
import Link from "next/link"
import {FaBars, FaBorderStyle, FaMoon, FaSun} from "react-icons/fa"
import __styles from "../../styles/Header.module.css"
import { useGlobalContext } from "../Context/Context"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
const Nav = () => {
  const {switchTheme, theme, clickedClass,showNav} = useGlobalContext()
  
  return (
    <section className={__styles.header__container}>
        <header className={__styles.header}>
    <div>
    <Link href='/'>
    <h2 style={{cursor: 'pointer'}}>HackSan.io</h2>
    </Link>
    </div>
   
     <DesktopNav />
     <MobileNav />
    
     <section className={theme === 'dark' ? clickedClass: ""} onClick={(e) => switchTheme(e)}>
     <h2 className="moon">{<FaMoon />}</h2>
     <h2 className="sun">{<FaSun />}</h2>
     </section>
     <div className={__styles.bars}>
       <FaBars onClick={showNav} />
     </div>
   </header>
    </section>
  )
}

export default Nav