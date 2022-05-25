
import styles from "../../styles/Search.module.css"
const Search = ({handleSearch, search}) => {
  console.log(search);
  return (
    <input type='text' value={search} placeholder="Search Post" className={styles.input} onChange={handleSearch} />
  )
}

export default Search