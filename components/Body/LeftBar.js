
import Link from "next/link"
import styles from "../../styles/Leftbar.module.css"
import Category from "./Category"

const LeftBar = ({data}) => {
  
  return (
    <div className={styles.left_container}>
      <Link href='/category/html'>
      <div className={styles.category}>
            <div>
              html
            </div>

            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/css'>
          <div className={styles.category}>
            <div>
              css
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/javascript'>
          <div className={styles.category}>
            <div>
              javascript
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/react'>
          <div className={styles.category}>
            <div>
              react
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/next'>
          <div className={styles.category}>
            <div>
              next.js
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/python'>
          <div className={styles.category}>
            <div>
              python
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/github'>
          <div className={styles.category}>
            <div>
              git/github
            </div>
            <div className={styles.total}>9+</div>
           
          </div>
          </Link>
    </div>
  )
}

export default LeftBar