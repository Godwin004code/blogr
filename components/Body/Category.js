
const Category = ({data}, text) => {
  const category = data.data.filter((item) => item.attributes.category === text)
  console.log(category);
}

export default Category