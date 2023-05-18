import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";
import { AppTitle } from "../../data-display/app-title/app-title";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";

export const AppReviewCard = (props: any) => {
  const {
    heading,
    description,
    imgSrc,
    headingClassName,
    descriptionClassName,
    reviewDetail,
    outerDivClassName,
    linkText,
    reviewDetailClassName,
    linkClassName,
    userImageClassName,
    size = "large",
  } = props;

  const headingClass = twMergeClass(
    `font-bold text-secondary-text text-xl leading-none ${headingClassName}`
  );
  const descriptionClass = twMergeClass(
    `text-[#2C2F62] font-normal text-base leading-none my-1 ${descriptionClassName}`
  );
  const outerDivClass = twMergeClass(
    `bg-smoke-white flex flex-col mb-2 p-3 h-4/5 rounded-lg ${outerDivClassName}`
  );
  const reviewDetailClass = twMergeClass(
    ` text-[#2C2F62] text-base grow font-normal mt-1 ${reviewDetailClassName}`
  );
  const linkClass = twMergeClass(`text-primary mb-3 mt-1 ${linkClassName}`);
  const userImageClass = twMergeClass(`${userImageClassName}`);
  return (
    <>
      <div className={outerDivClass}>
        <UserDetailCard
          // col1Md={5}
          // col2Md={18}
          // col1Lg={4}
          // col2Lg={19}
          col3Md={0}
          imageDivClassName="text-center ml-1"
          heading={heading}
          description={description}
          userDetailsClassName="flex items-center mb-3"
          userInfoClassName="ml-2"
          headingClassName={headingClass}
          descriptionClassName={descriptionClass}
          userImageClassName={userImageClass}
          userImage={imgSrc}
          size={size}
        />
        <AppTitle title={reviewDetail} className={reviewDetailClass} />
        <AppTitle title={linkText} className={linkClass} />
      </div>
    </>
  );
};
