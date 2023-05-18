import { Avatar, Space } from "antd";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { ADDCASEIMAGES } from "./add-case-images";
import { fieldTrimRequired } from "../../../utils/validations-utils";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

const selectAccountData = [
  {
    value: "euro",
    label: (
      <Space wrap>
        <img src={ADDCASEIMAGES.euroImage} className="mt-2" alt="" />
        <span>Euro</span>
      </Space>
    ),
  },
  {
    value: "gbp",
    label: (
      <Space wrap>
        <img src={ADDCASEIMAGES.gbpImage} className="mt-2" alt="" />
        <span>GBP</span>
      </Space>
    ),
  },
];

const selectAccountTypeData = [
  {
    value: "transaction",
    label: <AppTitle title="Transaction" className=" mt-1" />,
  },
  {
    value: "physical_card",
    label: <AppTitle title="Physical card" className=" mt-1" />,
  },
  {
    value: "virtual_card",
    label: <AppTitle title="Virtual card" className=" mt-1" />,
  },
  {
    value: "account",
    label: <AppTitle title="Account" className=" mt-1" />,
  },
  {
    value: "discount_and_offer",
    label: <AppTitle title="Discount & Offer" className=" mt-1" />,
  },
];
const addCaseDataFunction: any = (setShowTransactionIdField: any) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          name: "account",
          label: "Account",
          fieldType: "select",
          className: "dynamic-form-select-elegant",
          rules: [fieldTrimRequired?.("Field")],
          options: selectAccountData,
        },
        {
          id: 2,
          type: "text",
          name: "issueType",
          label: "Issue Type",
          fieldType: "select",
          className: "dynamic-form-select-elegant",
          rules: [fieldTrimRequired?.("Field")],
          options: selectAccountTypeData,
          onChange: (e: any) => setShowTransactionIdField(e),
        },
        {
          id: 3,
          type: "text",
          name: "issue",
          label: "Describe Issue",
          fieldType: "textarea",
          autoSize: false,
          maxLength: 150,
          showCount: true,
          className: "dynamic-form-input-elegant",
          style: { height: 120, resize: "none", border: "1px solid #d9d9d9" },
          rules: [fieldTrimRequired?.("Field")],
        },
        {
          id: 4,
          type: "upload",
          name: "attachment",
          label: "Add Attachment",
          fieldType: "upload",
          className: "w-full dynamic-form-input-elegant",
          suffix: (
            <Avatar icon={<ICONSCONSTANT.PlusOutlined />} size={25} className="cursor-pointer" />
          ),
          rules: [fieldTrimRequired?.("Field")],
        },
      ],
    },
  ];
};

const addCaseDataWithTransactionIdFunction: any = (
  setShowTransactionIdField: any,
  navigate: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          name: "account",
          label: "Account",
          fieldType: "select",
          className: "dynamic-form-select-elegant",
          rules: [fieldTrimRequired?.("Field")],
          options: selectAccountData,
        },
        {
          id: 2,
          type: "text",
          name: "issueType",
          label: "Issue Type",
          fieldType: "select",
          className: "dynamic-form-select-elegant",
          rules: [fieldTrimRequired?.("Field")],
          options: selectAccountTypeData,
          onChange: (e: any) => setShowTransactionIdField(e),
        },
        {
          id: 3,
          type: "number",
          name: "transactionId",
          label: "Transaction ID",
          fieldType: "input",
          className: "dynamic-form-input-elegant",
          rules: [fieldTrimRequired?.("Field")],
        },
        {
          id: 4,
          text: (
            <Space wrap size={5} className="font-medium text-[10px] -my-1">
              <AppTitle Variant="span" title="OR" />{" "}
              <AppTitle
                Variant="span"
                title="Select Transaction ID"
                className="text-primary underline cursor-pointer"
                onClick={() => navigate("/")}
              />
            </Space>
          ),
          fieldType: "text",
          className: "dynamic-form-input-elegant",
          rules: [fieldTrimRequired?.("Field")],
        },
        {
          id: 5,
          type: "text",
          name: "issue",
          label: "Describe Issue",
          fieldType: "textarea",
          autoSize: false,
          maxLength: 150,
          showCount: true,
          className: "dynamic-form-input-elegant",
          style: { height: 120, resize: "none", border: "1px solid #d9d9d9" },
          rules: [fieldTrimRequired?.("Field")],
        },
        {
          id: 6,
          type: "upload",
          name: "attachment",
          label: "Add Attachment",
          fieldType: "upload",
          className: "w-full dynamic-form-input-elegant",
          suffix: (
            <Avatar icon={<ICONSCONSTANT.PlusOutlined />} size={25} className="cursor-pointer" />
          ),
          rules: [fieldTrimRequired?.("Field")],
        },
      ],
    },
  ];
};

export const ADDCASEDATA = {
  addCaseDataWithTransactionIdFunction,
  addCaseDataFunction,
};
