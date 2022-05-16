import {useRouter} from "next/router"
import Image from "next/image"
import ReactMarkDown from "react-markdown"

const URL = process.env.STRAPIBASEURL

const Shock = ({data, paths}) => {
   
   const post = data.data.attributes
   const img = 'https://murmuring-dawn-44285.herokuapp.com'+post.img.data.attributes.formats.small.url
   console.log(img);
   console.log(data);
  return (
    <div>
       <h2>{post.title}</h2>
               <ReactMarkDown>
          {post.content}</ReactMarkDown>
       
       <div>
           <img src={img} alt='text' />
       </div>
        </div>
  )
}

export default Shock

export async function getStaticPaths() {
    const res = await fetch(`https://murmuring-dawn-44285.herokuapp.com/api/posts`)
    const data = await res.json()
    const paths = data.data.map((post) => {
        return {params: {id: post.id.toString()}}
    })
    console.log(paths)
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}) {
   
    const res = await fetch(`https://murmuring-dawn-44285.herokuapp.com/api/posts/${params.id}?populate=*`)
    const data = await res.json()
    return {
        props: {data},
        revalidate: 10
    }
}