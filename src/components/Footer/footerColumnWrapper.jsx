import FooterColumnItem from "./footerColumnItem";
import FooterColumnTitle from "./footerColumnTitle";

const FooterColumnWrapper = ({title, footerData}) => {
  
  return (
    <div className="col-lg-3 col-sm-6 col-7 mb-4 mb-lg-0 mx-auto p-0">
      <FooterColumnTitle title={title}/>
      <FooterColumnItem footerData={footerData}/>
    </div>
  )
}

export default FooterColumnWrapper;