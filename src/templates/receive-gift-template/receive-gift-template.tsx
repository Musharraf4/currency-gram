import { Image } from "antd";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const ReceiveGiftTemplate = (props: any) => {
  const { image, buttonData, receiverName, date } = props;
  return (
    <div className="text-center">
      <AppTitle
        className="font-semibold text-3xl sm:text-[46px] text-primary-text my-10"
        title="Congratulations!"
      />
      <AppTitle title="You have received a gift from" className="text-base text-primary-text" />
      <AppTitle title={receiverName} className="text-base text-primary-text my-1" />
      <AppTitle title={date} className="text-base text-primary-text my-5" />
      <Image src={image} preview={false} className="sm:w-[277px] w-[200px]" />
      <AppButton buttons={buttonData} />
      <AppTitle className=" text-xs text-primary-text " title="Create Currency Gram Account" />
      <AppTitle className=" text-xs text-primary-text mb-5 mt-1" title="& Get £5 reward" />
    </div>
  );
};
