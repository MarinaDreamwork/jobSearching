import HeroBlock from "../heroBlock"
import NavBarLargeScreen from "./navBarLargeScreen"
import NavBarSmallScreen from "./navBarSmallScreen"

const HeaderContainer = ({onMenuOpenButton, onMenuCloseButton}) => {
  return (
    <div className='container pt-5 p-0'>
        <NavBarSmallScreen onMenuOpenButton={onMenuOpenButton}/>
        <NavBarLargeScreen onMenuCloseButton={onMenuCloseButton}/>
        <HeroBlock />
    </div>
  )
}

export default HeaderContainer;