
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
          const img = 'https://murmuring-dawn-44285.herokuapp.com'+item.attributes.img.data.attributes.url;
          const date = new Date(item.attributes.createdAt);
          const time = date.toLocaleTimeString()
          const _date = date.toLocaleDateString()
          return (
            <div className={styles.posts_container} key={item.id}>
            <Link href={`/blog/${item.id}`} >
            <div className={styles.post}>
                <div className={styles.article_img}>
                    <img src={img} alt={item.attributes.title} />
                    
                </div>
                <div className={styles.article}>
                   
                    <h4>{item.attributes.category}</h4>
  
                    <h2 className={styles.h2}>{item.attributes.title}</h2>
                    <p>{item.attributes.excerpt}</p>
                    <div className={styles.date}>
                        <h4><FaClock style={{marginRight: 5}} />{time}</h4>
                        <h4><FaCalendarAlt style={{marginRight: 5}} />{_date}</h4>
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