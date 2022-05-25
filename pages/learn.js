import Learn from "../components/Learn Page/Learn"

const learn = ({data}) => {
 
  return (
    <div>
        <Learn data={data} />
    </div>
  )
}

export default learn

export async function getStaticProps() {
  const res = await fetch('http://murmuring-dawn-44285.herokuapp.com/api/learns/?populate=*')
  const data = await res.json()

  return {
    props: {data}
  }
}