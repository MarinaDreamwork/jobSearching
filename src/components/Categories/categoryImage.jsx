import Icons from "../../img/icons.svg";

const CategoryImage = ({icon}) => {
  return (
    <svg height='24' className="card-icon">
        <use xlinkHref={Icons + icon}></use>
    </svg>
  )
}

export default CategoryImage;