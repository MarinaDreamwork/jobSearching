import OfferButtonMore from "./offerButtonMore";
import OfferCompanyLogo from "./offerCompanyLogo";
import OfferSalary from "./offerSalary";
import OfferTitle from "./offerTitle";
import TagsGroup from "../tagsGroup";
import TagsGroupVacanciesWrapper from "./tagsGroupVacanciesWrapper";

const OfferWrapper = () => {
  return (
    <div className="offer d-flex align-items-center flex-column flex-lg-row">
      <OfferCompanyLogo />
      <OfferTitle />
      <OfferSalary />
      <TagsGroupVacanciesWrapper />
      <OfferButtonMore />
    </div>
  )
}

export default OfferWrapper;