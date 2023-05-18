import { Row, Col, Space, Divider } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppButton } from "../../components/buttons/app-button/app-button";
import { ICONSCONSTANT } from "../../constants/icons-constant";
// import accountDetails from "../../features/teams/role-details/account-details/account-details";

export const AddMoneyBankTransferTemplate = (props: any) => {
  const { setShowComponent, accountDetails, title, showModal } = props;

  return (
    <div className="mx-4 mb-10">
      <AppTitle
        title={title}
        className="text-center text-primary-text text-base my-8"
        variant="span"
      />
      <div className="border border-solid border-light-grey rounded-lg p-4">
        <Row justify={"space-between"} align="middle">
          <Col>
            <AppTitle
              title="Euro Account Details"
              className="text-xl text-primary-text font-medium"
              variant="span"
            />
          </Col>
          <Col>
            <Space wrap>
              <AppButton
                btnWrapperClassName="mt-0 lg:mt-0"
                buttons={[
                  {
                    className: " mr-2 bg-primary-background cursor-pointer border-none",
                    btnLink: () => setShowComponent(false),
                    btnText: <ICONSCONSTANT.QrcodeOutlined size={20} />,
                  },
                  {
                    className: " mr-2 bg-primary-background cursor-pointer border-none",
                    btnLink: showModal,
                    btnText: <ICONSCONSTANT.ShareAltOutlined />,
                  },
                  {
                    className: "px-3 bg-primary-background cursor-pointer border-none",
                    btnText: <ICONSCONSTANT.CopyOutlined />,
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
        <Divider className=" my-4" />

        {accountDetails &&
          accountDetails.map((detail: any) => {
            return (
              <>
                <Row justify={"space-between"} className="mb-2" key={detail.id}>
                  <Col>
                    <span className="font-semibold">{detail.title}</span>
                  </Col>
                  <Col>{detail.value}</Col>
                </Row>
              </>
            );
          })}
      </div>
    </div>
  );
};
