import WorkingPeopleImage from '../img/hero-image.svg';
import SearchLoupe from '../img/search.svg';
import ButtonWithIcon from './buttonWithIcon';

const HeroBlock = () => {
  return (
    <div className="row pt-5 hero">
          <div className="col-xxl-5 col-lg-7 col-md-9">
            <h1 className='hero-title'>Найдите удаленную работу вашей мечты</h1>
            <p className='hero-text'>Создайте резюме или отправьте отклик на вакансию в&nbsp;компании с мировым именем и работайте<br /> по свободному графику</p>
            <div className="input-group">
              <input type="text" className='input' placeholder='Начните поиск'/>
              <ButtonWithIcon title='Искать вакансии' src={SearchLoupe + '#search'} />
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
  )
}
export default HeroBlock;