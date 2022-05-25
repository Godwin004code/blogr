import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import styles from '../../styles/MobileNav.module.css'
import { useGlobalContext } from '../Context/Context'

const MobileNav = () => {
    const {show_nav, closeNav} = useGlobalContext()
  return (
    <nav className={show_nav ? 'mobile_nav active' : 'mobile_nav'}>
        <ul>
            <Link href='/'>
                <li>Home</li>
            </Link>
            <Link href='/learn'>
                <li>Learn</li>
            </Link>
           <span>
               <li>Categories</li>
               <div className={styles.submenu_links}>
                   <Link href='/category/html'>
                       <li>HTML</li>
                   </Link>
                   <Link href='/category/css'>
                       <li>CSS</li>
                   </Link>
                   <Link href='/category/javascript'>
                       <li>JavaScript</li>
                   </Link>
                   <Link href='/category/react'>
                       <li>React JS</li>
                   </Link>
                   <Link href='/category/nextjs'>
                       <li>Next JS</li>
                   </Link>
                   <Link href='/category/python'>
                       <li>Python</li>
                   </Link>
                   </div>
           </span>
            <Link href='/'>
                <li>Get in touch</li>
            </Link>
            <div className='remove'>
                <FaTimes onClick={closeNav} />
            </div>
        </ul>
    </nav>
  )
}

export default MobileNav