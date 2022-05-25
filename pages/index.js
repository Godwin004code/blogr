
import Head from "next/head"
import Home from "../components/Home"

const index = ({data}) => {
  console.log(data)
  return (
   <>
   <Head>
    <meta name="description" content='This is the page that shows how to do basic things' />
    <meta name='theme-color' content='rgb(33, 33, 52)' />
    <title>Sandev Home Page</title>
    </Head>
     <Home data={data} />
   </>
  )
}


export default index

export async function getStaticProps() {
  const res = await fetch(`http://murmuring-dawn-44285.herokuapp.com/api/posts/?populate=*`)
  const data = await res.json()

  return {
    props: {data}
  }
}