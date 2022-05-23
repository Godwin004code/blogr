import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import Nav from '../Nav/Nav'
import LeftBar from "../Body/LeftBar"
import RightBar from "../Body/RightBar"
import styles from '../../styles/Body.module.css'
import _styles from "../../styles/Main.module.css"
import __styles from "../../styles/SinglePost.module.css"
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
const SinglePost = ({img, title, content, category, author}) => {
    const [scrolled, setScrolled] = useState(0)
  return (
    <>

    <Nav />
    <div className={_styles.long_link}>
      <Link href='/'><a>Home<span><FaChevronRight /></span></a></Link> <Link href={`/category/${category}`}><a>{category} <span><FaChevronRight /></span></a></Link> {title}
    </div>
    <div>
      <h2>{author}</h2>
    </div>
    <div className={styles.body}>
    <div className={styles.leftbar}>
      <LeftBar />
    </div>
    <article className={styles.main}>
        <div className={_styles.article}>
        <div className={__styles.article_img}>
            <img src={img} alt={title} />
        </div>
       <div className={_styles.article}>
       <h2>{title}</h2>
       
          <ReactMarkdown>
            
          {content}
        
          </ReactMarkdown>
        
       </div>
        </div>
    </article>
    <div className={styles.rightbar}>
      <RightBar />
    </div>
    </div>
    </>
  )
}

export default SinglePost