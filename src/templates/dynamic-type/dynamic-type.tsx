import { Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppListCard } from "../../components/cards/app-list-card/app-list-card";

export const DynamicType = (props: any) => {
  const { data, mainFeatures, src, mainHeading, mainImgSrc, mainDescription } = props;
  console.log(props);
  return (
    <>
      <div>
        <AppListCard
          heading={mainHeading}
          description={mainDescription}
          imgSrc={mainImgSrc}
          setPositionClass="flex-row-reverse my-8"
          headingClassName="text-5xl md:text-6xl"
          userImageClassName="w-full"
        />
      </div>
      <Row>
        <Col xs={1} lg={2}></Col>
        <Col xs={22} lg={20}>
          {!!data?.length &&
            data?.map((singleData: any) => (
              <>
                <AppListCard
                  heading={singleData?.heading}
                  headingClassName={singleData?.headingClassName}
                  description={singleData?.description}
                  extraChild={singleData?.extraChild}
                  imgSrc={singleData?.imgSrc}
                  setPositionClass={`my-8 lg:my-16 lg:py-10 ${singleData?.setPositionClass}`}
                  userImageClassName="w-full"
                />
              </>
            ))}
        </Col>
        <Col xs={1} lg={2}></Col>
      </Row>
      {!!mainFeatures && (
        <>
          <div className="mt-2 md:mt-7">
            <AppTitle
              title={mainFeatures}
              className="text-4xl text-center text-primary-text font-semibold mb-5"
            />
            <div className="max-w-lg mx-auto mb-6">
              <img src={src} className="w-full" alt={mainFeatures} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
