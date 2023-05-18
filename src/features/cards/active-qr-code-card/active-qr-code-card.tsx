import { useEffect } from "react";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { ActiveQrCodeTemplate } from "../../../templates/active-qr-code/active-qr-code";

export const ActiveQrCodeCard = () => {
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Active a card");
    pageName("Cards")
  }, [bannerHeading]);

  return (
   
      <ActiveQrCodeTemplate
        title="Scan QR code for activation"
        discription="To activate your card, you must Log in to currency gram mobile app "
        AppQrCodeClassName="mx-auto"
        QrCodesize="300"
        AppQrCodevalue="https://ant.design/"
      />
  );
};
