
const LearnSearch = () => {
  return (
    <>
    <button onClick={handleClick}> {openSearch ? <FaTimes/> : <FaSearch />}</button>
    {openSearch && <Search  />}
    </>
  )
}

export default LearnSearch