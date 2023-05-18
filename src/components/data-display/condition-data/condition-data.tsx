import { CrispInfoCard } from "../../../skeleton/crisp-info-card/crisp-info-card";

export const ConditionData = (props: any) => {
  const { bannerHeading, navigateFunction, imgSrc, titleContainerClassName } = props;
  return (
    <CrispInfoCard
      rowClassName="mt-3 items-center"
      imgContainerClassName={"ml-4 mt-1 cursor-pointer"}
      imgSrc={imgSrc}
      imgClassName={"invert"}
      imgFunction={() => navigateFunction?.()}
      titleContainerClassName={titleContainerClassName}
      infoClassName={"ml-3 text-primary-text text-xl font-semibold sm:text-2xl"}
      info={bannerHeading}
      imgXs={3}
      imgMd={2}
      imgLg={1}
      infoSx={18}
      nonSx={4}
    />
  );
};
