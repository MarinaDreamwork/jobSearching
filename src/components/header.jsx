import Logo from './logo';
import Navigation from './navigation';
import AuthorizeBlock from './authorizeBlock';
import WorkingPeopleImage from '../img/hero-image.svg';
import SearchLoupe from '../img/search.svg';
import ButtonWithIcon from './buttonWithIcon';
import MenuBurger from '../img/menu-burger.svg';

const Header = () => {
  const navBar = document.querySelector('.navbar');

  const handleCloseMenuButton = () => {
    navBar.classList.remove('is-open');
  }
  const handleOpenMenuButton = () => {
    navBar.classList.add('is-open');
  }
  const buttonTitles = ['Войти', 'Регистрация', 'Искать вакансии']
  return (
    <header className='header pb-5'>
      <div className='container pt-5 p-0'>
        <div className="d-flex d-lg-none align-items-center justify-content-between">
            <Logo />
            <a href='#' className='menu-button' alt='icon: burger menu' onClick={handleOpenMenuButton}>
              <img src={MenuBurger}/>
            </a>
        </div>
        <div className='row align-items-center py-3 navbar flex-column flex-lg-row'>
          <a href="#" className="close-button d-lg-none" onClick={handleCloseMenuButton}>&times;</a>
          <div className="col-lg-2 d-flex justify-content-center mb-5 mb-lg-0">
            <Logo />
          </div>
          <div className="col-lg d-flex justify-content-center mb-5 mb-lg-0">
            <Navigation />
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-end">
            <AuthorizeBlock titles={buttonTitles}/>
          </div>
        </div>
        <div className="row pt-5 hero">
          <div className="col-xxl-5 col-lg-7 col-md-9">
            <h1 className='hero-title'>Найдите удаленную работу вашей мечты</h1>
            <p className='hero-text'>Создайте резюме или отправьте отклик на вакансию в&nbsp;компании с мировым именем и работайте<br /> по свободному графику</p>
            <div className="input-group">
              <input type="text" className='input' placeholder='Начните поиск'/>
              <ButtonWithIcon title={buttonTitles[2]} src={SearchLoupe + '#search'} />
            </div>
          <div className="tags-group mt-4 ms-2">
            <span className="tags-label">Например:</span>
            <a href="#" className="tag">Front-end</a>
            <a href="#" className="tag">Back-end</a>
            <a href="#" className="tag">Designer</a>
          </div>
          </div>
          <div className="col-xxl-6 offset-xxl-1 col-lg-5 mt-5 mt-lg-0">
            <img src={WorkingPeopleImage} alt='working people with laptops'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;