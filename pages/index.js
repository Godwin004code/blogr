
import Home from "../components/Home"

const index = ({data}) => {
  return (
   <>
     <Home data={data} />
   </>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch(`https://murmuring-dawn-44285.herokuapp.com/api/posts/?populate=*`)
  const data = await res.json()

  return {
    props: {data}
  }
}