import InputGroupSubscribtionWrapper from "./inputGroupSubscribtionWrapper"
import SubscribeText from "./subscribeText";
import SubscribeTitle from "./subscribeTitle";

const SubscribeForm = () => {
  return (
    <form className="subscribe-form d-flex flex-column justify-content-center">
      <SubscribeTitle />
      <SubscribeText />
      <InputGroupSubscribtionWrapper />
    </form>
  )
}

export default SubscribeForm;