import { Divider, Modal } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppCommentsModal = (props: any) => {
  const { modalWidth, isModalOpen, handleOk, handleCancel, closable, data, heading } = props;

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      closeIcon={<></>}
      onCancel={handleCancel}
      footer={null}
      centered
      closable={closable ?? true}
      width={modalWidth || "350px"}>
      <div>
        {!!heading && (
          <AppTitle
            className={`text-center font-semibold text-xl text-primary-text`}
            title={heading}
          />
        )}
        {data && (
          <div className="mt-4 max-h-[300px] overflow-y-auto text-primary-text border border-solid border-light-grey p-3 rounded-lg">
            {data?.map((item: any) => {
              return (
                <>
                  <Divider className="border-primary-text text-xs px-2 mb-1">{item?.date}</Divider>

                  <AppTitle
                    title={item?.message}
                    className="text-xs bg-input-background p-2 rounded"
                  />
                </>
              );
            })}
          </div>
        )}
      </div>
    </Modal>
  );
};
