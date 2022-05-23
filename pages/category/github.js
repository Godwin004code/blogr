
import Link from "next/link"
import Head from "next/head"
import {FaClock, FaCalendarAlt} from "react-icons/fa"
import LeftBar from "../../components/Body/LeftBar"
import _styles from "../../styles/Body.module.css"
import __styles from "../../styles/Leftbar.module.css"
import styles from "../../styles/Main.module.css"
import Nav from "../../components/Nav/Nav"
import Filtered from "../../components/Post/Filtered"


const js = ({data}) => {

  return (
      <>
       <Head>
          <title>categories of Git/GitHub</title>
          <meta name="description" content='This is the page that contains all categories that fall under Git/GitHub' />
      </Head>
      <Nav />
    <div className={_styles.body}> 
    <div className={__styles.leftbar}>
      <LeftBar />
    </div>
    <Filtered data={data} text='git' />
    <div className={_styles.rightbar}>
      rightbar
    </div>
    </div>
    </>
  )
}

export default js

export async function getStaticProps() {
  const res = await fetch(`https://murmuring-dawn-44285.herokuapp.com/api/posts/?populate=*`)
  const data = await res.json()

  return {
    props: {data}
  }
}