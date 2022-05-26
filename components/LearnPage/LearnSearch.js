import { useGlobalContext } from "../Context/Context"
import { FaSearch, FaTimes } from "react-icons/fa"
const LearnSearch = () => {
    const {handleClick,openSearch} = useGlobalContext()
  return (
    <>
    <button onClick={handleClick}> {openSearch ? <FaTimes/> : <FaSearch />}</button>
    {openSearch && <Search  />}
    </>
  )
}

export default LearnSearch