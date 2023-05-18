import { AppTitle } from "../../components/data-display/app-title/app-title";
import contgra from "../../assets/congratulations.png";
import { Button } from "antd";

export const AppCongratulationCard = (props: any) => {
  const {
    title,
    titleClassName,
    descriptionTitle,
    descriptionClassName,
    btntype,
    btnSize,
    btnText,
    btnClassName,
    imageClassName,
  } = props;

  return (
    <>
      <div>
        <AppTitle title={title} className={titleClassName} />
        <AppTitle title={descriptionTitle} className={descriptionClassName} />
        <Button type={btntype} size={btnSize} children={btnText} className={btnClassName} />
      </div>
      <div>
        <img src={contgra} className={imageClassName} />
      </div>
    </>
  );
};
