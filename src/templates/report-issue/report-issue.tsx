import { Button, Radio, Space } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const ReportIssueTemplate = (props: any) => {

  const { ReportIssueArray, btnChildren, btnType, value, onChange, btnFunction } = props;

  return (
    <>
      <div className="w-full max-w-lg mx-auto text-center">
        <div className="w-full max-w-xs mx-auto">
          <AppTitle className="text-2xl sm:text-3xl font-bold text-center" title="Select Reason" />
          <AppTitle
            className="leading-6 text-base text-center my-2"
            title="Select the reason from below why you want to replace a card?"
          />
        </div>
        <Radio.Group onChange={onChange} value={value} className="w-full">
          <Space direction="vertical" className="w-full">
            {ReportIssueArray.map((item: any) => (
              <div key={item.id} className="bg-slate-50 rounded-lg my-3 flex justify-between items-center flex-wrap p-4">
                <Radio value={item?.reason} className="flex justify-between flex-row-reverse w-full after:content-normal">
                  <AppTitle title={item?.reason} />
                </Radio>
              </div>
            ))}
          </Space>
        </Radio.Group>
        <div className="">
          <Button className="w-full pb-8 pt-2 mt-3 font-medium text-base" type={btnType} onClick={btnFunction}>
            {btnChildren}
          </Button>
        </div>
      </div>
    </>
  );
};
