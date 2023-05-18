import { Col, Divider, Row } from "antd";
import { UserDetailCard } from "../../skeleton/user-detail-card/user-detail-card";
import { AppTextAndButton } from "../../skeleton/app-text-and-button/app-text-and-button";

export const RequestCard = (props: any) => {
  const {
    btnLink,
    data, xs, lg, xl,
    textAndButtonTitle,
    textAndButtontype,
    textAndButtonText,
    TextButtonAndDividerClass,
    dividerClassName,
  } = props;
  return (
    <div>
      <div className={TextButtonAndDividerClass}>
        <AppTextAndButton
          btnClassName="px-10 mt-3 sm:mt-0"
          textAndButtonText={textAndButtonText}
          textAndButtontype={textAndButtontype}
          textAndButtonTitle={textAndButtonTitle}
          textAndButtonfirstCol="sm:text-left text-center"
          textAndButtonsecondCol="sm:text-right text-center"
          textAndButtonTitleClassName="text-lg sm:text-xl lg:text-2xl md:text-2xl font-semibold"
          textAndButtonClass="items-center"
          btnLink={btnLink}
        />

        <Divider className={dividerClassName} />
      </div>

      <Row gutter={[40, 40]} className="mb-12 pt-6 pb-6">
        {!!data?.length &&
          data?.map((item: any) => (
            <Col xs={xs} lg={lg} xl={xl}>
              <UserDetailCard
                key={item.id}
                icon={item.icon}
                showIcon={true}
                heading={item.title}
                description={item.description}
                userDetailsClassName="flex-wrap"
                userImageClassName="bg-transparent text-xl"
                headingClassName="text-sm sm:text-base font-medium"
                userInfoClassName="mt-1"
                descriptionClassName="text-start mt-1"
                imageDivClassName="mr-3"
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};
