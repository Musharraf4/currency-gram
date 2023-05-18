import { Dropdown } from "antd";
import { AppImageCard } from "../../cards/app-image-card/app-image-card";
import { AppTitle } from "../app-title/app-title";
import { AppTooltipIcon } from "../app-tooltip-icon/app-tooltip-icon";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const AppQuestionBox = (props: any) => {
  const {
    postername,
    posterimage,
    items,
    questionsdescription,
    questionsTitle,
    postedDate,
    totalViews,
    totalAnswers,
    showAnswers = true,
    onClickAnswer,
    iconButton,
  } = props;
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className="my-2">
          <AppImageCard
            heading={postername}
            imgSrc={posterimage}
            description={postedDate}
            headingClassName={`text-sm text-secondary-text font-medium`}
            shape="square"
            size={30}
          />
        </div>
        <div>
          <Dropdown trigger={["click"]} menu={{ items }}>
            <ICONSCONSTANT.EllipsisOutlined />
          </Dropdown>
        </div>
      </div>
      <div className="mt-2">
        <AppTitle
          title={questionsTitle}
          className="text-base font-semibold text-secondary-text mb-1"
        />
        <AppTitle
          className="text-sm font-normal text-primary-text mt-1 mb-3"
          title={
            questionsdescription?.length > 200 ? (
              <>
                {" "}
                {questionsdescription?.slice(0, 200)}... {"   "}
                <AppTitle
                  title={"See More"}
                  Variant="span"
                  className="text-primary font-medium text-sm underline"
                  onClick={() => {}}
                />
              </>
            ) : (
              questionsdescription
            )
          }
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center">
          {iconButton?.length &&
            iconButton?.map((x: any) => (
              <AppTooltipIcon buttons={x?.button} tooltipTitle={x?.title} />
            ))}
        </div>
        <div>
          <AppTitle title={`${totalViews ?? 0} Views`} className="text-xs text-grey font-medium" />
        </div>
      </div>
      {showAnswers && (
        <div className="flex items-center mt-1">
          <div>
            <AppTitle
              title={`${totalAnswers ?? 0} Answers`}
              className="text-xs text-primary font-medium"
              onClick={(e: any) => onClickAnswer?.(e)}
            />
          </div>
          <div>
            <AppTitle
              title={`${totalViews ?? 0} Last answer today at 3:12 AM`}
              className="text-xs text-grey font-medium ml-3"
            />
          </div>
        </div>
      )}
    </div>
  );
};
