
import Link from "next/link"
import {FaClock, FaCalendarAlt} from "react-icons/fa"
import LeftBar from "../../components/Body/LeftBar"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import Filtered from "../../components/Post/Filtered"
import _styles from "../../styles/Body.module.css"
import __styles from "../../styles/Leftbar.module.css"
import styles from "../../styles/config.module.css"


const js = ({data}) => {

  return (
    <>
    <Nav />
    <div className={_styles.body}> 
    <div className={styles.leftbar}>
      rightbar
    </div>
    
    <Filtered data={data} text='JavaScript' />
    <div className={styles.rightbar}>
    <LeftBar />
    </div>
    </div>
    <div className={_styles.footer}>
      <Footer />
    </div>
    </>
  )
}

export default js

export async function getStaticProps() {
  const res = await fetch(`http://murmuring-dawn-44285.herokuapp.com/api/posts/?populate=*`)
  const data = await res.json()
  return {
    props: {data}
  }
}