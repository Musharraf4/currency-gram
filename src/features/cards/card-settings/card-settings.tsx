import { useEffect, useState } from "react";
import { useAppLayout } from "../../../hooks/use-app-layout";
import { PhysicalCardSettings } from "./physical-card-settings";
import { VirtualCardSettings } from "./virtual-card-settings";

export const CardSettings = () => {
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Card Setting");
    pageName("Cards")
  }, [bannerHeading]);
  const [isActive, setIsActive] = useState('Physical card');

  return (
    <>

      {isActive === 'Virtual card' ?
        <VirtualCardSettings setIsActive={setIsActive} isActive={isActive}
        /> :
        <PhysicalCardSettings setIsActive={setIsActive} isActive={isActive}/>}

    </>
  );
};
