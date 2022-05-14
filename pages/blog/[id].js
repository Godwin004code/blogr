import {useRouter} from "next/router"

const URL = process.env.STRAPIBASEURL

const Shock = ({data, paths}) => {
    const router = useRouter()
  console.log(data);
  const post = data.data.attributes
  return (
    <div>
       <h2>{post.title}</h2>
       <p>{post.content}</p>
    </div>
  )
}

export default Shock

export async function getStaticPaths() {
    const res = await fetch(`${URL}/api/posts`)
    const data = await res.json()
    const paths = data.data.map((post) => {
        return {params: {id: post.id.toString()}}
    })
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
   
    const res = await fetch(`${URL}/api/posts${params.id}`)
    const data = await res.json()
    return {
        props: {data},
        revalidate: 10
    }
}