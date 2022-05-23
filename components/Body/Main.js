
import { useState } from "react";
import Post from "../Post/Post"


const Main = ({data, search}) => {
  
   
  // 'https://murmuring-dawn-44285.herokuapp.com/'+
  return (
    <>
    <div>
      
    </div>
    {
        data.data.filter((item) => item.attributes.title.includes(search.toLowerCase())).map((item) => {
            const img = 'https://murmuring-dawn-44285.herokuapp.com'+item.attributes.img.data.attributes.url;
            console.log(img)
            const date = new Date(item.attributes.createdAt);
            const time = date.toLocaleTimeString()
            const _date = date.toLocaleDateString()
           
            return <Post id={item.id} time={time} img={img} _date={_date} title={item.attributes.title} category={item.attributes.category} excerpt={item.attributes.excerpt} key={item.id} />
        })
    }
    </>
  )
}

export default Main