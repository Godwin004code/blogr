
import Head from "next/head"
import Link from "next/link"
import SingleLearnPage from "../components/LearnPage/SingleLearnPage"
import Nav from "../components/Nav/Nav"


import styles from "../styles/SingleLearnPage.module.css"
import LearnSearch from "../components/LearnPage/LearnSearch"

const learn = ({data}) => {
 //console.log(data)
 
 
  return (
    <>
    <Head>
    <meta name="description" content='This is the page that shows how to do basic things' />
    <meta name='theme-color' content='rgb(33, 33, 52)' />
    <title>Sandev Learn</title>
    </Head>
    <Nav />
    <LearnSearch />
    <div  className={styles.main}>
    {data.data.filter((item) => item.attributes.Project_name.includes()).map((item) => {
   const temp = item.attributes
  const img = 'http://murmuring-dawn-44285.herokuapp.com'+ item.attributes.Pro.data.attributes.url;
   return (
     <Link href={`/learn/${temp.slug}`} key={item.id}>
     <div><SingleLearnPage name={temp.Project_name} img={img} />   </div>
     </Link>
     )
 })}
    </div>
    </>
  )
}

export default learn

export async function getStaticProps() {
  const res = await fetch('http://murmuring-dawn-44285.herokuapp.com/api/learns/?populate=*')
  const data = await res.json()
  console.log(data)
  return {
    props: {data}
  }
}