import { Col, Divider, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { SENDMONEYPAYMENYTYPEPARAMSCONSTANTS } from "../../constants/params-constant";
import { HeadingAndTitle } from "../../skeleton/heading-and-title/heading-and-title";
import { TitledObjectDataMap } from "../../skeleton/titled-object-data-map/titled-object-data-map";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const ReceiptDetailTemplate = (props: any) => {
  const { paymentDetails, totalAmount, fee, onClose, paymentType, mainTitle } = props;
  const receiptIcon = [
    {
      icon: ICONSCONSTANT.ShareAltOutlined,
      iconClassName: "text-primary",
      iconName: "Share",
      show: [SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single, SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk],
      click: () => {},
      iconNameClassName: "text-xs font-weight-normal text-seconday-text mt-1",
    },
    {
      icon: ICONSCONSTANT.DownloadOutlined,
      iconClassName: "text-primary",
      iconName: "Download",
      click: () => {},
      show: [SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single, SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk],
      iconNameClassName: "text-xs font-weight-normal text-seconday-text mt-1",
    },
    {
      icon: ICONSCONSTANT.SaveOutlined,
      iconClassName: "text-primary",
      iconName: "Save to PDF",
      click: () => {},
      show: [SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single, SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk],
      iconNameClassName: "text-xs font-weight-normal text-seconday-text mt-1",
    },
    {
      icon: ICONSCONSTANT.EyeInvisibleOutlined,
      iconClassName: "text-primary",
      iconName: "View Details",
      show: [SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk],
      click: () => {
        console.log("hi");
      },
      iconNameClassName: "text-xs font-weight-normal text-seconday-text mt-1",
    },
  ];
  return (
    <>
      <div className="bg-disabled pt-8 rounded-lg pl-3 pr-3 md:pl-8 md:pr-8  pb-8 mx-auto">
        <div className="text-end mb-2 ">
          <ICONSCONSTANT.CloseOutlined
            className="cursor-pointer"
            onClick={(e: any) => onClose?.(e)}
          />
        </div>
        <TitledObjectDataMap
          headerClassName="text-center"
          mainTitle={` ${mainTitle || "Transaction Successful !"}`}
          mainTitleClassName="text-primary text-lg font-semibold mb-12"
          mainIcon={<ICONSCONSTANT.CheckCircleFilled className="text-primary text-4xl mb-4" />}
          objectData={paymentDetails}
          headingXs={24}
          headingMd={12}
          titleXs={24}
          titleMd={12}
          rowClassName="mb-4"
          headingClassName="text-chilly-grey font-semibold text-sm mb-1"
          titleClassName="text-secondary-text font-normal text-sm"
          headingColClassName="text-start"
          titleColClassName="text-end"
        />
        <div>
          <HeadingAndTitle
            heading="Total Amount"
            title={totalAmount || 300.0}
            rowClassName="mb-2"
            headingXs={24}
            headingMd={12}
            titleXs={24}
            titleMd={12}
            headingClassName="text-chilly-grey font-semibold text-lg mb-1"
            titleClassName="text-primary font-semibold tertiary-lg"
            // headingVariant={headingVariant}
            // titleVariant={titleVariant}
            // headingColClassName={headingColClassName}
            titleColClassName="text-end"
          />
        </div>
        <Divider className="border-dashed border-1 border-light-grey"></Divider>
        <div>
          <HeadingAndTitle
            heading="Fee/Charge"
            title={fee || 0.0}
            rowClassName="mb-2"
            headingXs={24}
            headingMd={12}
            titleXs={24}
            titleMd={12}
            headingClassName="text-chilly-grey font-semibold text-lg mb-1"
            titleClassName="text-primary font-semibold tertiary-lg"
            // headingVariant={headingVariant}
            // titleVariant={titleVariant}
            // headingColClassName={headingColClassName}
            titleColClassName="text-end"
          />
        </div>
        <Divider className="border-dashed border-1 border-light-grey"></Divider>

        <div className="text-center">
          <Row className="justify-center">
            {receiptIcon.length &&
              receiptIcon.map(
                (singleReceiptIcon: any) =>
                  singleReceiptIcon.show.includes(paymentType) && (
                    <Col xs={12} md={6}>
                      <div
                        className="cursor-pointer mb-3"
                        onClick={() => singleReceiptIcon.click?.()}
                      >
                        <div>
                          <singleReceiptIcon.icon className={singleReceiptIcon.iconClassName} />
                        </div>
                        <AppTitle
                          className={singleReceiptIcon.iconNameClassName}
                          title={singleReceiptIcon.iconName}
                        />
                      </div>
                    </Col>
                  )
              )}
          </Row>
        </div>
      </div>
    </>
  );
};
