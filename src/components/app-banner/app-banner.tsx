import { CrispInfoCard } from "../../skeleton/crisp-info-card/crisp-info-card";
import "./app-banner.scss";

export const AppBanner = (props: any) => {
  const { bannerHeading, navigateFunction, imgSrc, imgClassName, titleContainerClassName } = props;
  return (
    <>
      <div className={"mt-6 rounded-lg pt-4 app-banner-bg-image h-40 bg-primary"}>
        <CrispInfoCard
          rowClassName="mt-3"
          imgContainerClassName={"ml-4 mt-1 cursor-pointer"}
          imgSrc={imgSrc}
          imgClassName={imgClassName}
          imgFunction={() => navigateFunction?.()}
          titleContainerClassName={titleContainerClassName}
          infoClassName={"text-white text-xl sm:text-3xl text-center"}
          info={bannerHeading}
          imgXs={4}
          infoSx={16}
          nonSx={4}
        />
      </div>
    </>
  );
};
