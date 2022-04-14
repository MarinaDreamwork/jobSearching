import BurgerMenuButton from "./burgerMenuButton";
import Logo from "../logo";

const NavBarSmallScreen = ({onMenuOpenButton}) => {
  return (
    <div className="d-flex d-lg-none align-items-center justify-content-between">
      <Logo />
      <BurgerMenuButton onMenuOpenButton={onMenuOpenButton}/>
    </div>
  )
}

export default NavBarSmallScreen;