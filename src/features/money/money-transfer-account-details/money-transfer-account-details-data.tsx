import { AppDropdown } from "../../../components/dropdowns/app-dropdown/app-dropdown";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const accountInfo = {
  Date: "11/11/1111",
  Time: "33:44",
  "Payment Type": "Bulk",
  "Send By": "David Miller",
};
const getPayImage = (name: any) => {
  if (name === "Euro") return COMMONASSETSCONSTANT.euroImage;
  return COMMONASSETSCONSTANT.gbpImage;
};
const items = (prevPayMethod: any, selectedPayMethod: any, changePayMethod: any) => {
  return [
    {
      key: "1",
      label: (
        <div
          className="flex items-center justify-space-between pt-1 pb-1"
          onClick={() => {
            changePayMethod?.(prevPayMethod, selectedPayMethod);
          }}
        >
          <img width={"10px"} height={"10px"} src={getPayImage?.(prevPayMethod)} alt="" />
          {/* {prevPayMethod} */}
          <AppTitle Variant="span" className="text-xs ml-1 mr-1" title={prevPayMethod} />
        </div>
      ),
    },
  ];
};

export const paymentFormInputFieldsFuntion = (
  selectedPayMethod: any,
  setSelectedPayMethod: any,
  prevPayMethod: any,
  setPrevPayMethod: any,
  changePayMethod: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          // label: "first Name",
          name: "sendAmount",
          fieldType: "input",
          type: "number",
          className: "dynamic-form-input-elegant",
          suffix: (
            <AppDropdown
              items={items?.(prevPayMethod, selectedPayMethod, changePayMethod)}
              name={selectedPayMethod}
              overlayClassName="currency-dropdown"
            />
          ),
          // rules: [{ required: true, message: 'Please enter the correct email' }],
        },
        {
          id: 2,
          label: "Reference Message (optional)",
          name: "reference",
          // rules: [{ required: true, message: 'Please enter the correct password' }],
          fieldType: "input",
        },
      ],
    },
  ];
};

const timelineItems = [
  {
    children: (
      <div className="flex items-center justify-between">
        <div>Fast & Easy fee</div>
        <div>No Fee</div>
      </div>
    ),
  },
  {
    children: (
      <div className="flex items-center justify-between">
        <div>Exchange Rate</div>
        <div>1.1178</div>
      </div>
    ),
  },
  {
    className: "pb-0",
    children: (
      <div className="flex items-center justify-between">
        <div>Recipient will get</div>
        <div>$ 45</div>
      </div>
    ),
  },
];
export const internationalpaymentFormInputFieldsFuntion = (
  selectedPayMethod: any,
  setSelectedPayMethod: any,
  prevPayMethod: any,
  setPrevPayMethod: any,
  changePayMethod: any,
  isSchedule: any,
  setIsSchedule: any,
  toggleSchedule: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          // label: "first Name",
          name: "sendAmount",
          fieldType: "input",
          type: "number",
          className: "dynamic-form-input-elegant",
          suffix: (
            <AppDropdown
              items={items?.(prevPayMethod, selectedPayMethod, changePayMethod)}
              name={selectedPayMethod}
              overlayClassName="currency-dropdown"
            />
          ),
          // rules: [{ required: true, message: 'Please enter the correct email' }],
        },
        {
          id: 2,
          label: "",
          name: "",
          // rules: [{ required: true, message: 'Please enter the correct password' }],
          fieldType: "timeline",
          items: timelineItems,
          showLabel: "hidden",
        },
        {
          id: 3,
          // label: "first Name",
          name: "sendAmount",
          fieldType: "input",
          type: "number",
          className: "dynamic-form-input-elegant",
          suffix: (
            <AppDropdown
              items={items?.(prevPayMethod, selectedPayMethod, changePayMethod)}
              name={selectedPayMethod}
              overlayClassName="currency-dropdown"
            />
          ),
          // rules: [{ required: true, message: 'Please enter the correct email' }],
        },
        {
          id: 4,
          label: "Reference Message (optional)",
          name: "reference",
          // rules: [{ required: true, message: 'Please enter the correct password' }],
          fieldType: "input",
        },
        {
          id: 7,
          btnIcon: <ICONSCONSTANT.CalendarOutlined style={{ color: "#fff" }} />,
          fieldName: "Schedule Payment",
          fieldType: "switch",
          size: "small",
          switchBtnShape: "circle",
          switchBtnClassName: "bg-primary",
          switchRowClassName: "items-center",
          fieldNameClassName: "text-primary-text ml-3 text-sm font-normal",
          onChange: (e: any) => {
            // console.log(e);
            toggleSchedule?.(e);
          },
        },
        {
          id: 8,
          label: "Date",
          name: "date",
          disabled: !isSchedule,
          fieldType: "date",
          className: "w-full",
          size: "large",
          suffixIcon: <ICONSCONSTANT.CalendarOutlined />,
          rules: [{ required: isSchedule, message: "Please " }],
        },
      ],
    },
  ];
};
export const scheduleAccountFormInputFieldsFuntion = (
  selectedPayMethod: any,
  setSelectedPayMethod: any,
  prevPayMethod: any,
  setPrevPayMethod: any,
  changePayMethod: any,
  isSchedule: any,
  setIsSchedule: any,
  toggleSchedule: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          // label: "first Name",
          name: "sendAmount",
          fieldType: "input",
          type: "number",
          className: "dynamic-form-input-elegant",
          suffix: (
            <AppDropdown
              items={items?.(prevPayMethod, selectedPayMethod, changePayMethod)}
              name={selectedPayMethod}
              overlayClassName="currency-dropdown"
            />
          ),
          // rules: [{ required: true, message: 'Please enter the correct email' }],
        },
        {
          id: 2,
          label: "Reference Message (optional)",
          name: "reference",
          // rules: [{ required: true, message: 'Please enter the correct password' }],
          fieldType: "input",
        },
        {
          id: 7,
          btnIcon: <ICONSCONSTANT.CalendarOutlined style={{ color: "#fff" }} />,
          fieldName: "Schedule Payment",
          fieldType: "switch",
          size: "small",
          switchBtnShape: "circle",
          switchBtnClassName: "bg-primary",
          switchRowClassName: "items-center",
          fieldNameClassName: "text-primary-text ml-3 text-sm font-normal",
          onChange: (e: any) => {
            // console.log(e);
            toggleSchedule?.(e);
          },
        },
        {
          id: 8,
          label: "Date",
          name: "date",
          disabled: !isSchedule,
          fieldType: "date",
          className: "w-full",
          size: "large",
          suffixIcon: <ICONSCONSTANT.CalendarOutlined />,
          rules: [{ required: isSchedule, message: "Please " }],
        },
      ],
    },
  ];
};

export const MONEYTRANSFERACCOUNTDETAILSDATA = {
  internationalpaymentFormInputFieldsFuntion,
  paymentFormInputFieldsFuntion,
  scheduleAccountFormInputFieldsFuntion,
};
