import Link from "next/link";
import Nav from "../Nav/Nav"
import LearnOut from "./LearnOut";

const Learn = ({data}) => {

  return (
    <>
    <Nav />

    <div>
 {data.data.map((item) => {
   const temp = item.attributes
   const img ='https://murmuring-dawn-44285.herokuapp.com/'+ item.attributes.img.data.attributes.url;
   return (
     <Link href={`/learn/${temp.slug}`} key={item.id}>
     <span><LearnOut name={temp.Project_name} img={img}  />   </span>
     </Link>
     )
 })}
    </div>
    </>
  )
}

export default Learn