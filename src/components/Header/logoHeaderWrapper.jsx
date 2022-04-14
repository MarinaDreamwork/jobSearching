import Logo from "../logo";

const LogoHeaderWrapper = () => {
  return (
     <div className="col-lg-2 d-flex justify-content-center mb-5 mb-lg-0">
       <Logo nameOfClass='logo-link' altDescr='logo: find your job'/>
     </div>
  )
}

export default LogoHeaderWrapper;