
import styles from "../../styles/SingleLearnPage.module.css"
import Image from "next/image"
const SingleLearnPage = ({name, img}) => {
  return (
    <>
   
        <main id='learn_box' className={styles.learn_box}>
             <div className={styles.learn_img}>
             <Image src={img} alt='text' width={200} height={200}/> 
             </div>
            <h2>{name}</h2>
        </main>
    </>
  )
}

export default SingleLearnPage