
import { FaCopyright, FaDev, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className={styles.footer_container}>
      <div>
        <h2>sandev</h2>
      </div>
      <div>
        <span>Follow me on all my social media platforms</span>
        <div className={styles.social_media}>
          <li><a href='#'><FaTwitter /></a></li>
          <li><a href='#'><FaLinkedin /></a></li>
          <li><a href='#'><FaDev /></a></li>
          <li><a href='#'><FaMedium /></a></li>
        </div>
      </div>
      <div>
          <FaCopyright /> {year}
        </div>
    </div>
  )
}

export default Footer