import { Calendar, Modal } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { AppButton } from "../../buttons/app-button/app-button";
import { AppTitle } from "../../data-display/app-title/app-title";
import "./app-calendar-modal.scss";

export const AppCalendarModal = (props: any) => {
  const { date, setDate, isModalOpen, setIsModalOpen, handleCancel } = props;

  const onChange = (value: Dayjs) => {
    setDate(value.format("MMM DD,YYYY"));
  };
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      width={400}
      className="modal-calendar"
      centered
    >
      <AppTitle className="text-center text-xl font-bold" variant="span" title={date} />
      <Calendar
        fullscreen={false}
        onChange={(e) => onChange(e)}
        defaultValue={dayjs(new Date())}
        className="mt-5"
        disabledDate={(currentDate: Dayjs) => !!dayjs().isAfter(currentDate, "day")}
        //TODO: will work on it when backend
        // disabledDate={(currentDate: Dayjs) => !!dayjs().isBefore(currentDate, "day")}
        // value={date}
      />
      <div className="text-right mr-2 mt-2">
        <AppButton
          buttons={[
            {
              className:
                "bg-[#007BFF] text-white border-0 px-3 rounded-full font-medium disabled:bg-gray-200",
              btnLink: () => {
                setIsModalOpen(false);
                console.log(date);
              },
              btnText: "Done",
              disabled: !!!date,
            },
          ]}
        />
      </div>
    </Modal>
  );
};
