import { Col, Divider, Row, TreeSelect } from "antd";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppDynamicForm } from "../../components/form-elements/app-dynamic-form/app-dynamic-form";

export const AddTeamTemplate = (props: any) => {
  const {
    treeData,
    sendInviteHandler,
    sendInvite,
    SendInviteFormFieldsInput,
    onFinish,
    onFinishFailed
  } = props;
  return (
    <div>
      <AppCardWhite cardClassName="p-8">
        <Row style={{ minHeight: "65vh" }}>
          <Col lg={7} className="border-hide">
            <AppTitle
              className="text-xl font-semibold mb-1"
              title="Default roles(4)"
            />
            {treeData.map((item: any) => {
              return (
                <Col key={item.id}>
                  <TreeSelect
                    value={item.value}
                    treeLine={true}
                    style={{ width: "95%", marginTop: 25 }}
                    size="large"
                    treeData={item.dropdown}
                    onChange={sendInviteHandler}
                  />
                </Col>
              );
            })}
          </Col>
          <Col xs={24} lg={1} className="flex">
            <Divider
              type="vertical"
              orientation="center"
              className="mx-auto h-full hidden lg:block"
            />
          </Col>
          <Col xs={24} lg={16} className=" flex justify-center mt-10">
            {sendInvite && (
              <Col lg={14}>
                <AppDynamicForm
                  fieldMd={24}
                  fieldXs={24}
                  firstButtonText="Send Invite"
                  submitBtnClassName="w-full"
                  formFields={SendInviteFormFieldsInput}
                  onFinish={(e: any) => onFinish?.(e)}
                  onFinishFailed={(e: any) => onFinishFailed(e)}
                />
              </Col>
            )}
          </Col>
        </Row>
      </AppCardWhite>
    </div>
  );
};
