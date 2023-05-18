import { Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppListCard } from "../../components/cards/app-list-card/app-list-card";
import { AppListItems } from "../../components/data-display/app-list-items/app-list-items";
import { AppReplyInput } from "../../components/form-elements/app-reply-input/app-reply-input";
import { AppInput } from "../../components/form-elements/app-input/app-input";
import { AppImageCard } from "../../components/cards/app-image-card/app-image-card";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const SingleElementTemplate = (props: any) => {
  const {
    mainTitle,
    moreBlogsData,
    moreCategories,
    archieves,
    data,
    replyButton,
    replyTitle,
    calendarIcon,
    replyPlaceholder,
    onChange,
    detailAboutPost,
  } = props;
  return (
    <div className="mb-7 lg:mb-16">
      <AppTitle
        title={mainTitle}
        className="text-center my-5 lg:my-10 text-3xl font-medium text-secondary-text"
      />
      <Row gutter={{ md: 24, lg: 16 }}>
        <Col xs={1} lg={2}></Col>
        <Col xs={22} lg={20}>
          <Row>
            <Col xs={24} md={16} lg={16} className="mb-5 md:mb-0">
              <div className="border-5 rounded-xl border-smoke-white  border-solid p-4">
                <img src={data?.coverImage} className="w-full" alt={data?.heading} />
                <AppTitle
                  title={data?.heading}
                  className="text-xl my-3 text-[#333333] font-medium mb-4"
                />
                <Row className="flex items-center">
                  {detailAboutPost?.length &&
                    detailAboutPost?.map((x: any) => (
                      <Col>
                        <AppImageCard
                          userDetailsClassName="items-center"
                          heading={x?.heading}
                          size={35}
                          imgSrc={x?.imgSrc}
                          userImageClassName="p-1.5"
                          userInfoClassName="ml-1"
                          headingClassName="text-xs text-[#4F4F4F] font-normal mb-0"
                        />
                      </Col>
                    ))}
                </Row>
                {data?.content}
                <div className="my-4">
                  <AppReplyInput
                    mainTitle={replyTitle}
                    button={replyButton}
                    onChange={(e: any) => onChange?.(e)}
                    placeholder={replyPlaceholder}
                  />
                </div>
              </div>
            </Col>
            <Col md={1} lg={1}></Col>
            <Col xs={24} md={7} lg={7}>
              <div className="border-5 rounded-xl border-smoke-white  border-solid p-4 mb-5">
                <AppInput
                  type="text"
                  placeholder="Search Here"
                  prefix={<ICONSCONSTANT.SearchOutlined className="text-[#828282]" />}
                  inputClassName="rounded-full dynamic-form-input-elegant mb-0"
                  bordered={false}
                />
              </div>
              <div className="border-5 rounded-xl border-smoke-white  border-solid p-4 mb-5">
                {moreBlogsData?.length &&
                  moreBlogsData?.map?.((moreblog: any) => (
                    <>
                      <AppTitle
                        title={moreblog.mainTitle}
                        className="text-xl inline-block font-semibold text-primary-text border-b-primary mb-4 border-solid border-t-0 border-l-0 border-r-0 pb-3"
                      />
                      {moreblog?.data?.length &&
                        moreblog?.data?.map((single: any) => (
                          <AppListCard
                            col1Lg={10}
                            col2Lg={12}
                            offsetLg={0}
                            offsetMidLg={1}
                            heading={single?.heading}
                            headingClassName="text-sm mb-0"
                            userImageClassName="h-full"
                            description={
                              <div className="flex items-center">
                                <img src={calendarIcon} alt="" />{" "}
                                <AppTitle
                                  title={single?.date}
                                  Variant="span"
                                  className="text-xs text-grey ml-2"
                                />
                              </div>
                            }
                            imgSrc={single?.imgSrc}
                          />
                        ))}
                    </>
                  ))}
              </div>
              <div className="border-5 rounded-xl border-smoke-white  border-solid p-4 mb-5">
                {moreCategories?.length &&
                  moreCategories?.map?.((moreCategory: any) => (
                    <AppListItems
                      mainTitle={moreCategory.mainTitle}
                      listItems={moreCategory?.data}
                      // mainVariant="span"
                      mainTitleClassName="inline-block"
                    />
                  ))}
              </div>
              <div className="border-5 rounded-xl border-smoke-white  border-solid p-4 mb-5">
                {archieves?.length &&
                  archieves?.map?.((archieve: any) => (
                    <AppListItems
                      mainTitle={archieve.mainTitle}
                      listItems={archieve?.data}
                      mainTitleClassName="inline-block"
                    />
                  ))}
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={1} lg={2}></Col>
      </Row>
    </div>
  );
};
