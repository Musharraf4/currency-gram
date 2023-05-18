import { Col, Row } from "antd";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { AppImageCard } from "../../components/cards/app-image-card/app-image-card";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const RequestsHorizontalTemplate = (props: any) => {
  const { buttons, requestData, hasPending, onRowClick } = props;
  return (
    <div className=" mt-4 lg:mt-10">
      {requestData?.length &&
        requestData?.map((single: any) => (
          <Row
            className="items-center justify-between bg-secondary-background p-3 rounded-xl mb-3 hover:bg-hover-background "
            onClick={() => {
              onRowClick?.();
            }}
          >
            <Col xs={24} md={12}>
              <AppImageCard
                heading={single?.heading}
                description={single?.description}
                imgSrc={single?.userImg}
                subtitle={!!!hasPending && single?.status}
                desciptionClassName="text-xs font-medium mb-0"
                headingClassName="text-[#667085] text-sm mt-0"
              />
            </Col>
            <Col xs={24} md={12} className="text-end mt-2 md:mt-0">
              {!!buttons?.length && (
                <AppButton buttons={buttons} btnWrapperClassName="mt-0 lg:mt-0" />
              )}
              {!!hasPending && <AppTitle title={single?.status} />}
            </Col>
          </Row>
        ))}
    </div>
  );
};
