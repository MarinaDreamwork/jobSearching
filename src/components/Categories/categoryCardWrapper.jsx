import CategoryCardLink from "./categoryCardLink";

const CategoryCardWrapper = ({categoriesData}) =>  {

  return (
    <>
    {
      categoriesData.map((categoryData => (
        <div key={categoryData.id} className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
          <CategoryCardLink categoryData={categoryData}/>
        </div>
      )))
    }
    
    </>
  )
}

export default CategoryCardWrapper;