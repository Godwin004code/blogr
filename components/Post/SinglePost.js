import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import Nav from '../Nav/Nav'
import LeftBar from "../Body/LeftBar"
import RightBar from "../Body/RightBar"
import styles from '../../styles/Body.module.css'
import _styles from "../../styles/Main.module.css"
import __styles from "../../styles/Singlepost.module.css"
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
const SinglePost = ({img, title, content, category, author, date, time}) => {
    const [scrolled, setScrolled] = useState(0)
  return (
    <>

    <Nav />
    <div id='long_link' className={_styles.long_link}>
      <Link href='/'><a>Home<span><FaChevronRight /></span></a></Link> <Link href={`/category/${category}`}><a>{category} <span><FaChevronRight /></span></a></Link> {title}
    </div>
    <h2 id='title' className={__styles.h2}>{title}</h2>
    
    <div className={styles.body}>
      
    
    <article id='main' className={styles.main}>
        <div className={_styles.article}>
        <div className={__styles.article_img}>
            <img src={img} alt={title} />
        </div>
        <div id='author' className={__styles.author}>
      <div>Published By:{author}</div>
      <div className={__styles.published_date}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
       <div className={_styles.article}>
       
       
          <ReactMarkdown>
            
          {content}
        
          </ReactMarkdown>
        
       </div>
        </div>
    </article>
    </div>
    </>
  )
}

export default SinglePost