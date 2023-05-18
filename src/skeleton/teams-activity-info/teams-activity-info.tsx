import React from "react";
import { AppTitle } from "../../components/data-display/app-title/app-title";

const TeamsActivityInfo = (props: any) => {
  const { heading, subHeadingParagraph, cardHeading, description } = props;
  return (
    <div>
      <AppTitle title={heading} className="text-xl font-semibold pb-4 text-primary-text" />
      <AppTitle
        title={subHeadingParagraph}
        className="text-sm font-noraml pb-4 text-primary-text"
      />
      <div className="border border-solid border-light-grey rounded-xl p-3 bg-primary-background">
        <AppTitle title={cardHeading} className="text-base font-normal py-2" />
        <AppTitle title={description} className="text-xs font-normal py-2" />
      </div>
    </div>
  );
};

export default TeamsActivityInfo;
