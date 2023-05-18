import { Col, Row, TreeSelect } from "antd";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { UserDetailCard } from "../../skeleton/user-detail-card/user-detail-card";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const ReassignRoleTemplate = (props: any) => {
  const { avatarChildren, heading, description,treeData,sendInviteHandler } = props;
  return (
    <div>
      <AppCardWhite>
        <UserDetailCard
          size={52}
          avatarChildren={avatarChildren}
          description={description}
          heading={heading}
          userImageClassName="bg-[#38414F]"
          headingClassName="text-base font-medium"
          descriptionClassName="text-xs text-primary-text font-normal"
          userDetailsClassName="items-center p-5"
          userInfoClassName="ml-2 flex-1"
        />
      </AppCardWhite>

      <AppCardWhite cardClassName="p-8 pb-44">
        <div className="flex justify-center pb-4">
          <Col lg={9}>
            <AppTitle
              title="Current role"
              className="text-xl font-extrabold text-primary-text py-4"
            />
            <UserDetailCard
              userImageClassName="bg-white text-black"
              heading="Viewer"
              icon={<ICONSCONSTANT.EyeOutlined />}
              headingClassName="text-base font-medium"
              userDetailsClassName="items-center p-3 bg-secondary-background rounded-lg cursor-pointer"
              userInfoClassName="ml-2"
            />
          </Col>
        </div>
        <Row justify={"center"}>
          <Col xs={22} md={20} lg={9}>
            <AppTitle className="text-xl font-semibold mb-1" title="Finances" />
            {treeData.map((item: any) => {
              return (
                <Col key={item.id}>
                  <TreeSelect
                    value={item.value}
                    treeLine={true}
                    style={{ width: "100%", marginTop: 25 }}
                    size="large"
                    treeData={item.dropdown}
                    onChange={sendInviteHandler}
                  />
                </Col>
              );
            })}
          </Col>
        </Row>
      </AppCardWhite>
    </div>
  );
};
