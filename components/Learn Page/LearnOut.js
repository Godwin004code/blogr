
const LearnOut = ({name, img}) => {
  return (
    <div>
        <div>
            <img src={img} alt='text'  />
            <span>{name}</span>
        </div>
    </div>
  )
}

export default LearnOut