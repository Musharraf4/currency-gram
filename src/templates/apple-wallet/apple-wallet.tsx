import { Button } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";

export const AppleWalletTemplate = (props: any) => {
  const {
    title,
    discription,
    appleWalletSrc,
    appleWalletBtnType1,
    appleWalletBtnType2,
    firstBtnChildren,
    secondBtnChildren,
  } = props;

  return (
    <AppCardWhite cardClassName="p-5 sm:px-14 py-16">
      <div className="text-center w-full max-w-xl  m-auto">
        <img src={appleWalletSrc} alt="" />
        <AppTitle title={title} className="text-2xl sm:text-5xl mt-4 mb-7 font-extrabold" />
        <AppTitle title={discription} className="mt-5 mb-7 text-sm w-48 m-auto" />
        <div className="grid w-full max-w-sm m-auto">
          <Button className="mb-3 pt-2 pb-8 text-base" type={appleWalletBtnType1}>
            {firstBtnChildren}
          </Button>
          <Button className="border-none text-[#2e77fc] font-medium" type={appleWalletBtnType2}>
            {secondBtnChildren}
          </Button>
        </div>
      </div>
    </AppCardWhite>
  );
};
