import { Collapse } from "antd";
import { AppTitle } from "../app-title/app-title";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const AppAccordion = (props: any) => {
  const {
    item,
    mainHeading,
    UnActiveIcon = <ICONSCONSTANT.RightOutlined />,
    ActiveIcon = <ICONSCONSTANT.DownOutlined />,
    decriptionClassName,
    headerClassName,
  } = props;

  const { Panel } = Collapse;
  const headerClass = twMergeClass(`font-medium text-lg text-secondary-text ${headerClassName}`);
  const decriptionClass = twMergeClass(
    `text-base font-normal text-primary-text ${decriptionClassName}`
  );
  return (
    <Collapse
      accordion={true}
      bordered={false}
      ghost={true}
      expandIconPosition={"end"}
      expandIcon={({ isActive }) => (isActive ? ActiveIcon : UnActiveIcon)}
      size={"large"}
    >
      {mainHeading && (
        <AppTitle
          title={mainHeading}
          className="text-secondary-text font-semibold text-2xl"
          Variant="span"
        />
      )}
      {item?.map((data: any) => {
        return (
          <Panel header={data.header} key={item.key} className={headerClass}>
            <AppTitle title={data.text} className={decriptionClass} />
          </Panel>
        );
      })}
    </Collapse>
  );
};
