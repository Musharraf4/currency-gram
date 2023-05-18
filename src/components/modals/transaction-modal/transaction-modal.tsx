import { Avatar, Modal } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";

export const TransactionModal = (props: any) => {
  const {
    modalWidth,
    isModalOpen,
    handleOk,
    handleCancel,
    closable,
    src,
    icon,
    avatarSize,
    avatarClassName,
    avatarStyle,
    data,
    heading,
  } = props;
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={<></>}
      centered
      closable={closable ?? true}
      width={modalWidth || "350px"}>
      <div>
        <div className="text-center mt-8">
          <Avatar
            src={src}
            icon={icon}
            size={avatarSize}
            className={avatarClassName}
            style={avatarStyle}
          />
        </div>
        {!!heading && (
          <AppTitle
            className={`text-center font-semibold text-xl text-primary-text mt-2`}
            title={heading}
          />
        )}
        {data && (
          <div className="mt-4">
            {data?.map((item: any) => {
              return (
                <div className="flex justify-between leading-8">
                  <AppTitle
                    Variant="span"
                    title={item?.title}
                    className="font-medium text-primary-text"
                  />
                  <AppTitle Variant="span" title={item?.value} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Modal>
  );
};
