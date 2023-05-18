import { Dropdown } from "antd";
import { UserDetailCard } from "../../../skeleton/user-detail-card/user-detail-card";

export const AppMenuDropdown = (props: any) => {
  const { items, className, heading, imgSrc, description, ThirdColIcon, shape } = props;
  return (
    <Dropdown trigger={["click"]} className={`cursor-pointer ${className}`} menu={{ items }}>
      <div>
        <UserDetailCard
          heading={heading}
          description={description}
          userDetailsClassName="flex items-center"
          userInfoClassName="ml-3"
          headingClassName="font-semibold text-primary-text text-xl leading-none"
          descriptionClassName="text-light-grey font-bold text-xs leading-none"
          imageDivClassName="ml-1"
          userImageClassName="border-solid-orange"
          userImage={imgSrc}
          size="large"
          shape={shape}
          ThirdColIcon={ThirdColIcon}
          showIcon={true}
        />
      </div>
    </Dropdown>
  );
};
