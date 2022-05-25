
import Link from "next/link";
import {FaClock, FaCalendarAlt} from "react-icons/fa"
import styles from "../../styles/Main.module.css"

import _styles from "../../styles/Body.module.css"
const Filtered = ({data, text}) => {
    const filtered = data.data.filter((item) => item.attributes.category === text)
console.log(filtered);
  return (
    <div>
      {
        filtered.map((item) => {
          const img = 'http://localhost:1337'+item.attributes.img.data.attributes.url;
          const date = new Date(item.attributes.createdAt);
          const time = date.toLocaleTimeString()
          const _date = date.toLocaleDateString()
          return (
            <div id="post" className={styles.posts_contain} key={item.id}>
            <Link href={`/blog/${item.id}`} >
            <div className={styles.post}>
                <div className={styles.article_img}>
                    <img src={img} alt={item.attributes.title} />
                  
                </div>
                <div className={styles.article}>
                   
                    <h4 id="category">{item.attributes.category}</h4>
  
                    <h2 className={styles.h2}>{item.attributes.title}</h2>
                    <p>{item.attributes.excerpt}</p>
                    <div className={styles.date}>
                        <h4 id="category"><FaClock style={{marginRight: 5}} />{time}</h4>
                        <h4 id="category"><FaCalendarAlt style={{marginRight: 5}} />{_date}</h4>
                    </div>
                </div>
            </div>
        </Link>
        </div>
          )
        })
      }
    </div>
  )
}

export default Filtered