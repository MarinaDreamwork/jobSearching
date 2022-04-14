import ButtonWithIcon from "./buttonWithIcon";
import Input from "./input";

const InputGroup = ({placeholder, title, src}) => { 
  return (
    <>
      <Input placeholder={placeholder}/>
      <ButtonWithIcon title={title} src={src} />
    </>
  )
}

export default InputGroup;