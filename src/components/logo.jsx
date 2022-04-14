import LogoImg from '../img/logo.svg';

const Logo = ({nameOfClass, altDescr}) => {
  return (
    <>
      <img src={ LogoImg } className={nameOfClass} alt={altDescr}/>
    </>
  )
}

export default Logo;