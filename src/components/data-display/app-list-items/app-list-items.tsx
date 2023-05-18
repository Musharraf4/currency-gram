import { Divider } from "antd";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { AppTitle } from "../app-title/app-title";

export const AppListItems = (props: any) => {
  const { mainTitle, listItems, hasHr, mainTitleClassName, mainVariant } = props;
  const mainTitleClass = twMergeClass(
    `text-xl font-semibold text-primary-text border-b-primary  mb-4 border-solid border-t-0 pb-3 border-l-0 mb-5 lg:mb-8 border-r-0 ${mainTitleClassName}`
  );
  return (
    <>
      <AppTitle title={mainTitle} className={mainTitleClass} Variant={mainVariant} />
      {hasHr && <Divider className="border-[.5px] border-solid border-smoke-white"></Divider>}
      {listItems?.length &&
        listItems?.map((single: any, index: any) => (
          <>
            <AppTitle title={single} className="text-base font-normal text-[#333333] my-4" />
            {index !== listItems?.length - 1 && (
              <Divider className="border-[.5px] border-solid border-smoke-white"></Divider>
            )}
          </>
        ))}
    </>
  );
};
