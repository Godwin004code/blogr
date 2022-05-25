import Link from 'next/link'
import styles from '../../styles/DesktopNav.module.css'

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <Link href='/'>
                <li>Home</li>
            </Link>
            <Link href='/learn'>
                <li>Learn</li>
            </Link>
           
            <Link href='/'>
                <li>Get in touch</li>
            </Link>
        </ul>
    </nav>
  )
}

export default DesktopNav