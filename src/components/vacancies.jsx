import LogoCompany from '../img/logo-company.png';
import Button from './button';

const Vacancies = () => {
  return (
    <section className="section offers">
      <div className="container">
        <h2 className="section-title">Свежие вакансии</h2>
          <div className="offer d-flex align-items-center flex-column flex-lg-row">
            <img src={LogoCompany} alt="company logo" className="offer-avatar mb-4 mb-lg-0" />
            <div className="offer-title mb-4 mb-lg-0">
              <h3 className="offer-heading">Front-end разработчик</h3>
              <span className="offer-place">Технопарк, Казань</span>
            </div>
            <span className="offer-salary mb-4 mb-lg-0">65 000 ₽</span>
            <div className="tags-group offer-tags mb-4 mb-lg-0">
              <span className='tags-label'>Требования:</span>
              <a href="#" className="tag">React</a>
              <a href="#" className="tag">SAAS</a>
              <a href="#" className="tag">Figma</a>
            </div>
            <a href="" className="more mt-5 mt-lg-0">Подробнее →</a>
          </div>
          <div className="offer d-flex align-items-center flex-column flex-lg-row">
            <img src={LogoCompany} alt="company logo" className="offer-avatar mb-4 mb-lg-0" />
            <div className="offer-title mb-4 mb-lg-0">
              <h3 className="offer-heading">Front-end разработчик</h3>
              <span className="offer-place">Технопарк, Казань</span>
            </div>
            <span className="offer-salary mb-4 mb-lg-0">65 000 ₽</span>
            <div className="tags-group offer-tags mb-4 mb-lg-0">
              <span className='tags-label'>Требования:</span>
              <a href="#" className="tag">React</a>
              <a href="#" className="tag">SAAS</a>
              <a href="#" className="tag">Figma</a>
            </div>
            <a href="" className="more mt-5 mt-lg-0">Подробнее →</a>
          </div>
          <div className="offer d-flex align-items-center flex-column flex-lg-row">
            <img src={LogoCompany} alt="company logo" className="offer-avatar mb-4 mb-lg-0" />
            <div className="offer-title mb-4 mb-lg-0">
              <h3 className="offer-heading">Front-end разработчик</h3>
              <span className="offer-place">Технопарк, Казань</span>
            </div>
            <span className="offer-salary mb-4 mb-lg-0">65 000 ₽</span>
            <div className="tags-group offer-tags mb-4 mb-lg-0">
              <span className='tags-label'>Требования:</span>
              <a href="#" className="tag">React</a>
              <a href="#" className="tag">SAAS</a>
              <a href="#" className="tag">Figma</a>
            </div>
            <a href="" className="more mt-5 mt-lg-0">Подробнее →</a>
          </div>
           <div className="offer d-flex align-items-center flex-column flex-lg-row">
            <img src={LogoCompany} alt="company logo" className="offer-avatar mb-4 mb-lg-0" />
            <div className="offer-title mb-4 mb-lg-0">
              <h3 className="offer-heading">Front-end разработчик</h3>
              <span className="offer-place">Технопарк, Казань</span>
            </div>
            <span className="offer-salary mb-4 mb-lg-0">65 000 ₽</span>
            <div className="tags-group offer-tags mb-4 mb-lg-0">
              <span className='tags-label'>Требования:</span>
              <a href="#" className="tag">React</a>
              <a href="#" className="tag">SAAS</a>
              <a href="#" className="tag">Figma</a>
            </div>
            <a href="" className="more mt-5 mt-lg-0">Подробнее →</a>
          </div>
          <div className="button-more d-flex justify-content-center">
            <Button title='Больше вакансий'/>
          </div>
        </div>
    </section>
  )
}

export default Vacancies;