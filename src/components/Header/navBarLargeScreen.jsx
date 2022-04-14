import AuthorizeBlock from "./authorizeBlock";
import CloseBtn from "./closeButton";
import Logo from "../logo";
import Navigation from "./navigation";
import LogoHeaderWrapper from "./logoHeaderWrapper";

const NavBarLargeScreen = ( {onMenuCloseButton} ) => {
  const buttonTitles = ['Войти', 'Регистрация'];
  return (
    <div className='row align-items-center py-3 navbar flex-column flex-lg-row' id='navbar'>
      <CloseBtn onMenuCloseButton={onMenuCloseButton}/>
      <LogoHeaderWrapper /> 
      <Navigation />
      <AuthorizeBlock titles={buttonTitles}/>
    </div>
  )
}

export default NavBarLargeScreen;