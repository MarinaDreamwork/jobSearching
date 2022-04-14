import InputGroupHeroWrapper from './inputGroupHeroWrapper';
import TagsGroupSearchWrapper from './tagsGroupSearchWrapper';
import WorkingPeoplePictureWrapper from './workingPeoplePictureWrapper';

const HeroBlock = () => {
  return (
    <div className="row pt-5 hero">
          <div className="col-xxl-5 col-lg-7 col-md-9">
            <h1 className='hero-title'>Найдите удаленную работу вашей мечты</h1>
            <p className='hero-text'>Создайте резюме или отправьте отклик на вакансию в&nbsp;компании с мировым именем и работайте<br /> по свободному графику</p>
            <InputGroupHeroWrapper />
            <TagsGroupSearchWrapper />
          </div>
          <WorkingPeoplePictureWrapper />
        </div>
  )
}
export default HeroBlock;