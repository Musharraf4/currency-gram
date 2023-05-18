import { Button } from "antd";
import React from "react";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import TeamsActivityInfo from "../../skeleton/teams-activity-info/teams-activity-info";
import { UserDetailCard } from "../../skeleton/user-detail-card/user-detail-card";

const TeamsActivityPermissionTemplate = (props: any) => {
  const {
    accountsPermissionData,
    heading,
    subHeadingParagraph,
    cardHeading,
    description,
  } = props;
  return (
    <div className="mt-4">
      <TeamsActivityInfo
        heading={heading}
        subHeadingParagraph={subHeadingParagraph}
        cardHeading={cardHeading}
        description={description}
      />

      <div>
        {accountsPermissionData.map((item: any) => {
          return (
            <>
              <div
                key={item?.id}
                className="flex justify-between mt-4 items-center mx-2 sm:mx-0"
              >
                <AppTitle
                  title={item?.title}
                  className="text-xl font-semibold text-primary-text"
                />
                <Button
                  type="text"
                  className="text-sm font-normal text-primary"
                >
                  {item.enableBtn}
                </Button>
              </div>
              <div className="border border-solid border-light-grey rounded-xl p-3 bg-primary-background mt-3">
                {item?.child?.map((item: any) => {
                  return (
                    <div key={item.id}>
                      <UserDetailCard
                        heading={item.heading}
                        defaultChecked={item.defaultChecked}
                        headingClassName="text-sm font-normal pr-2"
                        imageDivClassName="hidden"
                        userDetailsClassName="flex justify-between  py-5"
                        showSwitch={item.showSwitch}
                        onClick={item?.onClick}
                        sizeSwitch="small"
                        switchColClassName="flex justify-end"
                        col2Xs={20}
                        col3Xs={4}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TeamsActivityPermissionTemplate;
