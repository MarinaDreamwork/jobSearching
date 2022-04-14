import Button from "../button";
import ButtonLink from "./buttonLink";

const AuthorizeBlock = ({titles}) => {

  return (
    <div className="col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-end">
      <ButtonLink title={titles[0]}/>
      <Button title={titles[1]}/>
    </div>
  )
}

export default AuthorizeBlock;