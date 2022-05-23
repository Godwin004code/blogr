
import styles from "../../styles/Search.module.css"
const Search = ({handleSearch}) => {
  return (
    <input type='text' placeholder="Search Post" className={styles.input} onChange={handleSearch} />
  )
}

export default Search