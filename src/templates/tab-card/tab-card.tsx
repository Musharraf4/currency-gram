import { UserDetailCard } from "../../skeleton/user-detail-card/user-detail-card";

export const TabCard = (props: any) => {
  const {
    tabCardIcon,
    tabIconUserImage,
    tabCardHeading,
    tabCradClassName,
    tabCarduserInfoClassName,
    tabCardTitleClassName,
    tabCardDescription,
    onCardClick,
  } = props;

  return (
    <div className={tabCradClassName}>
      <UserDetailCard
        col1Lg={4}
        col2Lg={19}
        col3Lg={1}
        col1Xs={7}
        col2Xs={16}
        col3Xs={1}
        showIcon={true}
        heading={tabCardHeading}
        onCardClick={onCardClick}
        ThirdColIcon={tabCardIcon}
        userImage={tabIconUserImage}
        description={tabCardDescription}
        headingClassName={tabCardTitleClassName}
        userInfoClassName={tabCarduserInfoClassName}
        userImageClassName="object-none"
        userDetailsClassName="flex items-center p-4"
      />
    </div>
  );
};
