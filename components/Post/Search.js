
import styles from "../../styles/Search.module.css"
import { useGlobalContext } from "../Context/Context"
const Search = () => {
  const {handleSearch, search} = useGlobalContext()
  return (
    <input type='text' value={search} placeholder="Search Post" className={styles.input} onChange={handleSearch} />
  )
}

export default Search