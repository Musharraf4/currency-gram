import { Button } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { UserDetailCard } from "../../skeleton/user-detail-card/user-detail-card";

export const BusinessCardSettingsTemplate = (props: any) => {
  const {
    title,
    discription,
    userImageClassName,
    setActiveClass,
    PhysicalCardSettingArray,
    buttons,
  } = props;

  return (
    <>

      <AppTitle className="text-2xl font-semibold text-center" title={title} />
      <AppTitle
        className="text-base text-center mx-auto max-w-xs mt-3 mb-8"
        title={discription}
      />
      {PhysicalCardSettingArray.map((card: any) => (
        <UserDetailCard
          size={70}
          col1Xs={24}
          col2Xs={18}
          col3Xs={2}
          col1Md={3}
          col2Md={14}
          col3Md={4}
          onChange={(e: any) => { console.log(e); card.onChange?.(e) }}
          checked={card?.checked}
          heading={card.heading}
          description={card.cardDescription}
          avatarChildren={card.avatarChildren}
          userImage={card.userImage}
          icon={card.icon}
          // checked={card?.checked}
          showSwitch={card.showSwitch}
          defaultChecked={card.defaultChecked}
          imageDivClassName="text-center"
          switchColClassName="text-end w-full"
          userImageClassName={` p-4 group-hover:brightness-0 group-hover:invert ${userImageClassName}`}
          headingClassName="font-semibold text-primary-text mb-2 text-base group-hover:text-white text-class"
          descriptionClassName="text-primary-text font-normal text-sm group-hover:text-white text-class"
          userDetailsClassName={`border group bg-primary-background rounded-2xl mb-4 p-2 sm:p-6 hover:bg-primary-hover cursor-pointer items-center flex-wrap ${setActiveClass} `}
          userInfoClassName="flex flex-col justify-center ml-4 w-full"
          onCardClick={card?.onCardClick}
        />
      ))}
      <div className="mt-4 lg:mt-10 text-center">
        {!!buttons?.length &&
          buttons?.map?.((x: any) => (
            <Button
              size={x?.size}
              className={x?.className}
              disabled={x?.disabled}
              icon={x?.icon}
              type={x?.type}
              ghost={x?.ghost}
              onClick={(e: any) => {
                x?.btnLink?.(e);
              }}>
              <AppTitle
                title={x?.btnText}
                className={x?.btnClassName}
                Variant={x?.btnVariant}
              />
            </Button>
          ))}
      </div>
    </>
  );
};
