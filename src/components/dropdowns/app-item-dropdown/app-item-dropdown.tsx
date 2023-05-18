import { Button, Col, Dropdown, Row } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import { AppButton } from "../../buttons/app-button/app-button";

export const AppItemDropdown = (props: any) => {
  const { items, title, className, mainTitle, button } = props;
  return (
    <Row className="items-center justify-between ">
      <Col>
        <AppTitle
          title={mainTitle}
          className="font-bold text-2xl text-secondary-text mr-4"
          Variant="span"
        />
        <Dropdown menu={{ items }} placement="bottom" trigger={["click"]} className={className}>
          <Button>
            <AppTitle title={title} className="" />
          </Button>
        </Dropdown>
      </Col>
      <Col>
        <AppButton buttons={button} btnWrapperClassName="mt-0 lg:mt-0" />
      </Col>
    </Row>
  );
};
