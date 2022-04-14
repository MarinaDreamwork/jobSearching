import Logo from "../logo"
import FooterInfo from "./footerInfo"

const FooterInfoWrapper = () => {
  return (
    <div className="col-lg-3 col-sm-6 col-7 mx-auto mb-4 mb-lg-0 p-0">
      <Logo nameOfClass='footer-logo' altDescr='logo: Find Your Job'/>
      <FooterInfo />
    </div>
  )
}

export default FooterInfoWrapper;