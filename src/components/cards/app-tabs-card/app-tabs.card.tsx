import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";

export const AppTabsCard = (props: any) => {
  const {
    heading,
    imgSrc,
    description,
    onCardClick,
    setActiveClass,
    size,
    col1Xs = 5,
    col2Xs = 15,
    col3Xs,
    col1Sm = 5,
    col2Sm = 15,
    col3Sm,
    col1Md = 3,
    col2Md = 20,
    col3Md,
    col1Lg = 5,
    col2Lg = 17,
    col3Lg,
    col1Xl = 3,
    col2Xl = 19,
    col3Xl,
  } = props;
  return (
    <UserDetailCard
      onCardClick={(e: any) => onCardClick?.(e)}
      userDetailsClassName={` mx-3 mb-2 py-5 px-3 flex items-center font-medium rounded-2xl border border-solid border-light-grey cursor-pointer hover:text-primary  hover:bg-tertiary-background ${setActiveClass}`}
      userInfoClassName="ml-3"
      userImage={imgSrc}
      // icon={imgSrc}
      imageDivClassName={"text-center"}
      size={size}
      userImageClassName="bg-white p-1 text-primary-text"
      heading={heading}
      headingClassName="text-sm font-bold text-primary-text"
      description={description}
      descriptionClassName="text-xs font-medium text-grey mt-1.5"
      col1Xs={col1Xs}
      col1Md={col1Md}
      col2Xs={col2Xs}
      col2Md={col2Md}
      col3Xs={col3Xs}
      col3Md={col3Md}
      col1Lg={col1Lg}
      col2Lg={col2Lg}
      col3Lg={col3Lg}
      col1Xl={col1Xl}
      col2Xl={col2Xl}
      col3Xl={col3Xl}
      col1Sm={col1Sm}
      col2Sm={col2Sm}
      col3Sm={col3Sm}
    />
  );
};
