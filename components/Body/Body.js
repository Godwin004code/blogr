

import Main from "./Main"
import LeftBar from "./LeftBar"
import RightBar from "./RightBar"
import styles from "../../styles/Body.module.css"
import __styles from "../../styles/Header.module.css"
import Link from "next/link"
import Nav from "../Nav/Nav"
import { FaSearch, FaTimes } from "react-icons/fa"
import { useState } from "react"
import Search from "../Post/Search"
import Footer from "../Footer/Footer"

const Body = ({data}) => {
  const [search, setSearch] = useState('')
  const [openSearch, setOpenSearch] = useState(false)

    const handleSearch = (e) => {
      setSearch(e.target.value)
    }

    const handleClick = () => {
      setOpenSearch(!openSearch)
    }

  return (
    <>
    <Nav />
    <button className={styles.btn1} onClick={handleClick}> {openSearch ? <FaTimes/> : <FaSearch />}</button>
    {openSearch && <Search  handleSearch={handleSearch} />}
    <div className={styles.body}>
        <div className={styles.leftbar}>
        <LeftBar data={data} />
        </div>
        <div className={styles.main}>
        <Main data={data} search={search} />
        </div>
        <div className={styles.rightbar}>
        <RightBar />
        </div>
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
    </>
  )
}

export default Body

