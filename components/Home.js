
import styles from "../styles/Darkmode.module.css"
import Body from "./Body/Body"

const URL = process.env.STRAPIBASEURL

export default function Home({data}) {
  
  return (
    <div className={styles.body}>
      <Body data={data} />
    </div>
  )
}

{/* <button onClick={(e) => switchTheme(e)} className={theme === 'dark' ? clickedClass: ""}>switchTheme</button> */}

// export async function getStaticProps() {
  
//   const res = await fetch('http://localhost:1337/api/posts?populate=*')
//   const data = await res.json()

//   return {
//     props: {data},
//     revalidate: 10
//   }
// }
//https://murmuring-dawn-44285.herokuapp.com/api/posts
// {
//   data.data.filter((item) => item.attributes.title.includes(search)).map((post) => {
//     return <Link key={post.id} href={`/blog/${post.id}`} >
//     <div>
//     <a>{post.attributes.title}</a>
    
//     </div>
//     </Link>
//   })
// }