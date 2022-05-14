import Link from "next/link"
import { useState } from "react"

const URL = process.env.STRAPIBASEURL

export default function Home({data}) {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div>
      <h1>Amazing Blog</h1>
      <input type='text' value={search} placeholder='Search for posts' onChange={handleSearch} />
     {
       data.data.filter((item) => item.attributes.title.includes(search)).map((post) => {
         return <Link key={post.id} href={`/blog/${post.id}`} >
         <div>
         <a>{post.attributes.title}</a>
         <p>{post.attributes.content}</p>
         </div>
         </Link>
       })
     }
    </div>
  )
}


export async function getStaticProps() {
  
  const res = await fetch(`http://localhost:1337/api/posts`)
  const data = await res.json()

  return {
    props: {data},
    revalidate: 10
  }
}