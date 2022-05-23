
import Link from "next/link"
import {FaClock, FaCalendarAlt} from "react-icons/fa"
import LeftBar from "../../components/Body/LeftBar"
import Nav from "../../components/Nav/Nav"
import Filtered from "../../components/Post/Filtered"
import _styles from "../../styles/Body.module.css"
import __styles from "../../styles/Leftbar.module.css"
import styles from "../../styles/Main.module.css"


const js = ({data}) => {

  return (
    <>
    <Nav />
    <div className={_styles.body}> 
    <div className={__styles.leftbar}>
      <LeftBar />
    </div>
    
    <Filtered data={data} text='JavaScript' />
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