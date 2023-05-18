import { Tabs } from "antd";
import "./app-tabs-switch.scss";

export const TabsSwitch = (props: any) => {
  const {
    items,
    defaultActiveKey,
    onChange,
    activeKey,
    addIcon,
    centered,
    moreIcon,
    popupClassName,
    size,
    tabBarGutter,
    tabBarStyle,
    tabPosition,
    type,
    onTabClick,
  } = props;
  return (
    <div className="tabs-switch">
      <Tabs
        defaultActiveKey={defaultActiveKey}
        items={items}
        onChange={onChange}
        activeKey={activeKey}
        addIcon={addIcon}
        centered={centered}
        moreIcon={moreIcon}
        popupClassName={popupClassName}
        size={size}
        tabBarGutter={tabBarGutter}
        tabBarStyle={tabBarStyle}
        tabPosition={tabPosition}
        type={type}
        onTabClick={onTabClick}
      />
    </div>
  );
};
