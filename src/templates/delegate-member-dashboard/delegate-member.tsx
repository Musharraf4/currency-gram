import { DelegateMembers } from "../../features/users/delegate-members/delegate-members";
import { HeadingAndTitle } from "../../skeleton/heading-and-title/heading-and-title";
import { DelegateBalanceCard } from "../delegate-member-balance-card/delegate-balance-card";

export const DelegateMemberTemplate = (props: any) => {
  const {
    balanceCardData,
    title,
    heading,
    rowClassName,
    headingClassName,
    titleClassName,
  } = props;

  return (
    <div>
      <div className=" w-full flex justify-between items-center mt-2">
        <HeadingAndTitle
          title={title}
          heading={heading}
          rowClassName={rowClassName}
          headingClassName={headingClassName}
          titleClassName={titleClassName}
        />
      </div>
      <DelegateBalanceCard
        balanceCardData={balanceCardData}
        styleAppTitle="ml-2"
        shape="square"
        // userImageClassName="hidden sm:block"
        mainAppTitleClass="text-base font-semibold"
        subAppTitleClass="text-xs font-normal"
      />
      <DelegateMembers />
    </div>
  );
};
