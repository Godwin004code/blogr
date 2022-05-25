

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
import { useGlobalContext } from "../Context/Context"

const Body = ({data}) => {
  const {handleClick,openSearch, search} = useGlobalContext()

  return (
    <>
    <Nav />
    <button className={styles.btn1} onClick={handleClick}> {openSearch ? <FaTimes/> : <FaSearch />}</button>
    {openSearch && <Search />}
    <div className={styles.body}>
        <div className={styles.leftbar}>
        leftbar
        </div>
        <div className={styles.main}>
        <Main data={data} search={search.toLowerCase()} />
        </div>
        <div className={styles.rightbar}>
        <LeftBar />
        </div>
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
    </>
  )
}

export default Body

