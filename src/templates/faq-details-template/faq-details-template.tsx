import { Col, Row } from "antd";
import { AppAccordion } from "../../components/data-display/app-accordion/app-accordion";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppInput } from "../../components/form-elements/app-input/app-input";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const FAQDetailsTemplate = (props: any) => {
  const { mainHeading, accordianData, filterSearch } = props;
  return (
    <Row justify={"center"}>
      <Col xs={23} sm={16} className="my-12 ">
        <center>
          <AppTitle title={mainHeading} className="font-semibold text-2xl text-primary-text" />
          <AppInput
            inputClassName="my-10 md:w-2/4 text-center"
            placeholder="Search a question"
            size="large"
            onChange={(e: any) => filterSearch?.(e)}
            prefix={
              <ICONSCONSTANT.SearchOutlined type="search" style={{ color: "rgba(0,0,0,.25)" }} />
            }
          />
        </center>
        <div style={{ height: "500px" }} className="overflow-y-auto">
          {accordianData?.map((item: any) => {
            return (
              <div className="bg-secondary-background rounded-lg p-2 sm:p-8 mb-5" key={item.key}>
                <AppAccordion mainHeading={item?.mainHeading} item={item?.data} />
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};
