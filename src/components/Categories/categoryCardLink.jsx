import CategoryDescription from "./categoryDescription";
import CategoryImage from "./categoryImage";

const CategoryCardLink = ({categoryData}) => {
  return (
    <a href="#" className="card d-flex flex-column align-items-center">
      <CategoryImage icon={categoryData.icon}/>
      <CategoryDescription data={categoryData.description} />
    </a>
  )
}
export default CategoryCardLink;