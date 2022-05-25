
import Link from "next/link"
import styles from "../../styles/Leftbar.module.css"

const LeftBar = ({data}) => {
  
  return (
    <div className={styles.left_container}>
      <Link href='/category/html'>
      <div className={styles.category}>
            <div>
              <a>html</a>
            </div>

            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/css'>
          <div className={styles.category}>
            <div>
              <a>css</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/javascript'>
          <div className={styles.category}>
            <div>
              <a>javascript</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/react'>
          <div className={styles.category}>
            <div>
              <a>react</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/nextjs'>
          <div className={styles.category}>
            <div>
              <a>next js</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/python'>
          <div className={styles.category}>
            <div>
              <a>python</a>
            </div>
            <div className={styles.total}>9+</div>
          </div>
          </Link>
          <Link href='/category/github'>
          <div className={styles.category}>
            <div>
              <a>git/github</a>
            </div>
            <div className={styles.total}>9+</div>
           
          </div>
          </Link>
    </div>
  )
}

export default LeftBar