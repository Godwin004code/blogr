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
            <Link href='/'>
                <li>Learn</li>
            </Link>
           
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