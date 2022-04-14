import SectionTitle from "../sectionTitle";
import CategoryCardWrapper from "./categoryCardWrapper"

const CategoriesContainer = ({categoriesData}) => {
  return (
    <div className="container">
        <SectionTitle title='Категории'/>
        <div className="row">
          <CategoryCardWrapper categoriesData={categoriesData}/>
        </div>
    </div>
  )
}

export default CategoriesContainer;