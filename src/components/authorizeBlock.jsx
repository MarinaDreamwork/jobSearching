import Button from "./button";
import ButtonLink from "./buttonLink";

const AuthorizeBlock = ({titles}) => {

  return (
    <>
      <ButtonLink title={titles[0]}/>
      <Button title={titles[1]}/>
    </>
  )
}

export default AuthorizeBlock;