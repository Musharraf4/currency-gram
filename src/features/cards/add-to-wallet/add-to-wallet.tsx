import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { ADDTOWALLETIMAGES } from "./add-to-wallet-images/add-to-wallet-images"
import { AppleWalletTemplate } from "../../../templates/apple-wallet/apple-wallet";

export const AddToWallet = () => {
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading(walletType === "apple" ? "Add to Apple wallet" : "Add to Google pay");
    pageName("Cards")
  }, [bannerHeading]);

  const { cardType, walletType } = useParams();
  console.log({ cardType, walletType });
  const walletTypes = ["google", "apple"];
  const addWalletType = (wallet: any) => {
    if (!walletTypes.includes(wallet as any)) return "";
    if (wallet === "apple") return ADDTOWALLETIMAGES.appleCard;
    if (wallet === "google") return ADDTOWALLETIMAGES.googleCard;
  };

  return (
    <>

      <AppleWalletTemplate
        title="Setup Your Currency Gram Card with Apple Pay"
        discription="Connect your card for an easy and secure transaction"
        firstBtnChildren="Add"
        secondBtnChildren="Not Now"
        appleWalletBtnType1="primary"
        appleWalletSrc={addWalletType?.(walletType)}
      />

    </>
  );
};
