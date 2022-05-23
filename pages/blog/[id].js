import {useRouter} from "next/router"
import Image from "next/image"
import ReactMarkDown from "react-markdown"
import SinglePost from "../../components/Post/SinglePost"
import { useEffect, useState } from "react"

const URL = process.env.STRAPIBASEURL

const Shock = ({data, paths}) => {
    const [scrolled, setScrolled] = useState(0)

    const showProgress = () => {
        const winScroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scroll = (winScroll / height) * 100
        setScrolled(scroll)
    }
    useEffect(() => {
        window.addEventListener('scroll', showProgress)
        return () => window.removeEventListener('scroll', showProgress)
        
    }, [])
   const post = data.data.attributes
   const img = 'https://murmuring-dawn-44285.herokuapp.com'+item.attributes.img.data.attributes.url;
   //console.log(img);
  return (
    <div>
        
        <SinglePost title={post.title} category={post.category} author={post.Author} content={post.content} img={img} />
        <div>
            Related posts
        </div>
        <div className="progress_container">
            <div style={{width: `${scrolled}%`}} className="progress_line"></div>
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