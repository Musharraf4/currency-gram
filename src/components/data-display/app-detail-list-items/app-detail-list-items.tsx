import { Col, Divider, Row } from "antd";
import { AppImageCard } from "../../cards/app-image-card/app-image-card";
import { AppTitle } from "../app-title/app-title";

export const AppDetailListItems = (props: any) => {
  const { mainTitle, listItems, linkTitle } = props;

  return (
    <>
      <Row className="my-4 items-center">
        <Col xs={12}>
          <AppTitle title={mainTitle} className="text-xl font-bold text-secondary-text" />
        </Col>
        <Col xs={12} className="text-end">
          <AppTitle title={linkTitle} className="text-sm text-primary font-medium" />
        </Col>
      </Row>
      <Divider className="border-[.5px] border-solid border-light-grey my-2"></Divider>
      {listItems?.length &&
        listItems?.map((single: any) => (
          <>
            <div className="my-2">
              <AppImageCard
                heading={single?.name}
                imgSrc={single?.image}
                headingClassName={`text-sm text-primary-text font-medium ${single.headingClassName}`}
                shape="square"
                size={30}
                onHeadingClick={(e: any) => single?.onHeadingClick?.(e)}
                imageDivClassName={single?.imageDivClassName}
              />
            </div>
          </>
        ))}
    </>
  );
};
