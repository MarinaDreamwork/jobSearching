import SectionTitle from "../sectionTitle"
import ButtonVacanciesWrapper from "./buttonVacanciesWrapper"
import OffersWrapper from "./offersWrapper"

const VacanciesContainer = () => {
  return (
    <div className="container">
      <SectionTitle title='Свежие вакансии' />
      <OffersWrapper />
      <ButtonVacanciesWrapper />
    </div>
  )
}

export default VacanciesContainer;