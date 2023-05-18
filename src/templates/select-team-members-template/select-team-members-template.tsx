import { useState } from "react";
import { ICONSCONSTANT } from "../../constants/icons-constant";
import { Avatar, Button, Checkbox, Col, Input, Row, Tooltip } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const SelectTeamMembersTemplate = (props: any) => {
  const { TeamMembersArray, btnChildren, btnLink } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Row justify={"center"}>
      <Col xs={24} md={16} lg={12} > 
        <Input
          size="large"
          className="mb-6"
          placeholder="Search"      
          suffix={
            <Tooltip title="Extra information">
              <ICONSCONSTANT.SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <div>
          <Checkbox value="checkbox1" checked={isChecked} onChange={handleChange} />
          <AppTitle
            title="Select all members"
            Variant="span"
            className="text-base font-medium ml-2"
          />
        </div>

        <div className="bg-slate-50 rounded-lg my-3 w-full overflow-auto">
          {TeamMembersArray.map((item: any) => (
            <div className="flex justify-between items-center py-5 px-4">
              <div className="min-w-[200px]">
                <Checkbox
                  value="checkbox2"
                  // checked={isChecked}
                // onChange={handleChange}
                />
                <Avatar src={item.imgSrc} className="mx-3" />
                <AppTitle title={item.title} Variant="span" />
              </div>
              <div className="min-w-[50px] text-end">
                <AppTitle title={item.description} Variant="span" />
              </div>
            </div>
          ))}
        </div>

        <Button onClick={btnLink} className="w-full pb-8 pt-2 mt-3 font-medium text-base" type="primary">
          {btnChildren}
        </Button>
      </Col>
    </Row>
  );
};
