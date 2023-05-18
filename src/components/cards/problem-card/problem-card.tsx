import { Space } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";

// TODO will be changed according to backend
export const ProblemCard = (props: any) => {
  const { data, openTransactionModal } = props;
  return (
    <div className="text-primary-text">
      <AppTitle title={data?.heading} className=" font-semibold text-base text-secondary-text" />
      <div className="flex justify-between">
        <AppTitle Variant="span" title={data?.subHeading1} className="font-medium " />
        <AppTitle Variant="span" title={data?.account} />
      </div>
      <div className="flex justify-between">
        <AppTitle Variant="span" title={data?.subHeading2} className="font-medium " />
        <AppTitle Variant="span" title={data?.issueType} />
      </div>
      <div className="flex justify-between">
        <Space>
          <AppTitle Variant="span" title={data?.subHeading3} className="font-medium " />
          <AppTitle
            onClick={openTransactionModal}
            Variant="span"
            title={data?.detailsText}
            className="font-medium text-xs text-primary cursor-pointer underline"
          />
        </Space>
        <AppTitle Variant="span" title={data?.transactionId} />
      </div>

      <AppTitle title={data?.subHeading4} className="font-medium " />
      <AppTitle title={data?.describedIssue} />

      <AppTitle title={data?.subHeading5} className="font-medium " />
      <AppTitle
        Variant="span"
        title={"File.jpg"}
        className="text-xs text-primary cursor-pointer underline"
      />
    </div>
  );
};
