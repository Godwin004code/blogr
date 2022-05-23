
import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/Main.module.css"
import { FaCalendarAlt, FaClock, FaStar} from "react-icons/fa"

const Post = ({id,img,category,title,excerpt,time,_date}) => {
   
  return (
    <div className={styles.posts}>
       
                <Link href={`/blog/${id}`} >
                <div className={styles.post}>
                    <div className={styles.article_img}>
                        <img src={img} alt={title} />
                        
                    </div>
         
                    <div className={styles.article}>
                       
                        <h4>{category}</h4>

                        <h2 className={styles.h2}>{title}</h2>
                        <article>{excerpt}</article>
                        <div className={styles.date}>
                            <h4><FaClock style={{marginRight: 5}} />{time}</h4>
                            <h4><FaCalendarAlt style={{marginRight: 5}} />{_date}</h4>
                        </div>
                    </div>
                </div>
            </Link>
            </div>
  )
}

export default Post