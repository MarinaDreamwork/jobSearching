import Icons from "../img/icons.svg";

const CategoriesSection = () => {
  const categoriesData = [
    {
      categoryName: ['Дизайн', 'Разработка', 'Копирайтинг', 'Безопасность', 'Видео', 'Образование']
    },
    {
      categoryImage: ['Icons + "#brush"']
    },
    {
      categoryAltText: []
    }];
  return (
    <section className="section categories-section">
      <div className="container">
        <h2 className="section-title">Категории</h2>
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <a href="#" className="card d-flex flex-column align-items-center">
              <svg height='24' className="card-icon">
                <use xlinkHref={Icons + "#brush"}></use>
              </svg>
              <span className="card-text">Дизайн</span>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <a href="#" className="card d-flex flex-column align-items-center">
              <svg height='24' className="card-icon">
                <use xlinkHref={Icons + "#browser"}></use>
              </svg>
              <span className="card-text">Разработка</span>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <a href="#" className="card d-flex flex-column align-items-center">
              <svg height='24' className="card-icon">
                <use xlinkHref={Icons + "#edit"}></use>
              </svg>
              <span className="card-text">Копирайтинг</span>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <a href="#" className="card d-flex flex-column align-items-center">
              <svg height='24' className="card-icon">
                <use xlinkHref={Icons + "#fingerprint"}></use>
              </svg>
              <span className="card-text">Безопасность</span>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
          <a href="#" className="card d-flex flex-column align-items-center">
              <svg height='24' className="card-icon">
                <use xlinkHref={Icons + "#camera"}></use>
              </svg>
              <span className="card-text">Видео</span>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
          <a href="#" className="card d-flex flex-column align-items-center">
              <svg height='24' className="card-icon">
                <use xlinkHref={Icons + "#school"}></use>
              </svg>
              <span className="card-text">Образование</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection;