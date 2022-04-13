import LogoImg from "../img/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-7 mx-auto mb-4 mb-lg-0 p-0">
            <img src={LogoImg} className='footer-logo' alt='logo: Find Your Job'/>
            <p className="footer-description">Сайт с вакансиями для тех,<br /> кто ищет удаленную работу</p>
            <p className="footer-copyright">© 2022</p>
          </div>
          <div className="col-lg-3 col-sm-6 col-7 mb-4 mb-lg-0 mx-auto p-0">
            <h3 className="footer-title">Свяжитесь с нами</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="tel:+78002020300" className="footer-list-link">8 800 20 20 300</a>
              </li>
              <li className="footer-list-item">
                <a href="mailto:info@findyourjob.net" className="footer-list-link">info@findyourjob.net</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 col-7 mb-4 mb-lg-0 mx-auto p-0">
             <h3 className="footer-title">Информация</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">Обработка данных</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">Конфиденциальность</a>
              </li><li className="footer-list-item">
                <a href="#" className="footer-list-link">Публичная оферта</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 col-7 mb-4 mb-lg-0 mx-auto p-0">
             <h3 className="footer-title">Навигация по сайту</h3>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">Вакансии</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">Компании</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-list-link">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;