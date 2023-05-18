import { SENDMONEYPATH, SLASHPATH } from "../../../constants/routes-constant";
import {
  SENDMONEYPAYMENYTYPEPARAMSCONSTANTS,
  SENDMONEYTYPEPARAMSCONSTANTS,
} from "../../../constants/params-constant";
import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { AppDropdown } from "../../../components/dropdowns/app-dropdown/app-dropdown";
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";

export const currencyGramToCurrencyGramListsCardFunction = (navigate: any, transferType: any) => {
  return [
    {
      id: "1",
      heading: "Single Payment",
      description: "Free withdrawal limit 400 pounds",
      imgSrc: COMMONASSETSCONSTANT.userImage,
      linkPath: () =>
        navigate(
          `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single}`
        ),
    },
    {
      id: "2",
      heading: "Bulk Payment",
      description: "Also set up scheduled payments",
      imgSrc: COMMONASSETSCONSTANT.multipleImage,
      linkPath: () =>
        navigate(
          `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk}`
        ),
    },
  ];
};

export const dataSource = [
  {
    key: "1",
    name: "John",
    account_no: 123123,
    sort_code: 123123,
    currency: "British Pound",
    reference: "John Brown",
    // render: (status: any) => <BinImage />,
  },
  {
    key: "2",
    name: "Cena",
    account_no: 123123,
    sort_code: 123123,
    reference: "John Brown",
    currency: "British Pound",
    action: 123123,
  },
];

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "1",
  },
  {
    title: "Account no",
    dataIndex: "account_no",
    key: "2",
  },
  {
    title: "Sort Code",
    dataIndex: "sort_code",
    key: "3",
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "4",
  },
  {
    title: "Reference",
    dataIndex: "reference",
    key: "5",
  },
  //   {
  //     title: "Action",
  //     dataIndex: "action",
  //     key: "8",
  //     render: () => (
  //       <div className="flex " style={{ gap: "15px" }}>
  //         <img src={binImage} alt="bin" className="cursor-pointer " />
  //         <img src={editImage} alt="bin" className="cursor-pointer" />
  //       </div>
  //     ),
  //   },
];

export const SENDMONEYTYPEPARAMSARRAY = [
  SENDMONEYTYPEPARAMSCONSTANTS.CGTOCG,
  SENDMONEYTYPEPARAMSCONSTANTS.business,
  SENDMONEYTYPEPARAMSCONSTANTS.donate,
  SENDMONEYTYPEPARAMSCONSTANTS.international,
  SENDMONEYTYPEPARAMSCONSTANTS.link,
  SENDMONEYTYPEPARAMSCONSTANTS.local,
];
export const SENDMONEYTYPEPARAMSARRAYFORMAINCARD = [
  SENDMONEYTYPEPARAMSCONSTANTS.CGTOCG,
  SENDMONEYTYPEPARAMSCONSTANTS.international,
  SENDMONEYTYPEPARAMSCONSTANTS.local,
];
export const SENDMONEYPAYMENYTYPEPARAMSARRAY = [
  SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single,
  SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.bulk,
  SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.any,
];
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
  changePayMethod: any,
  availableBalance: any
) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 3,
          fieldType: "text",
          text: "How much would you like to send?",
          textClassName: "text-xl font-weight-semibold text-primary-text text-center mb-0.5",
        },
        {
          id: 9,
          fieldType: "text",
          text: (
            <div>
              <AppTitle title={`${availableBalance}`} className="text-primary" Variant="span" />
              <AppTitle title={` available in your Account`} Variant="span" />
            </div>
          ),
          textClassName: "text-center",
        },
        {
          id: 1,
          label: "first Name",
          name: "firstName",
          fieldType: "input",
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

export const paymentTransferTypeTableFilterButtonFunction = (navigate: any, transferType: any) => {
  return [
    {
      size: "large",
      btnLink: () =>
        navigate(
          `${SENDMONEYPATH}${SLASHPATH}${transferType}${SLASHPATH}${SENDMONEYPAYMENYTYPEPARAMSCONSTANTS.single}`
        ),
      btnText: "ADD",
      type: "primary",
      icon: <ICONSCONSTANT.PlusOutlined />,
      btnVariant: "span",
      // ghost: true,
      // className: "text-primary border-primary ml-1 mb-1",
    },
  ];
};

export const MONEYTRANSFERTYPEDATA = {
  currencyGramToCurrencyGramListsCardFunction,
  dataSource,
  columns,
  SENDMONEYTYPEPARAMSARRAY,
  SENDMONEYTYPEPARAMSARRAYFORMAINCARD,
  SENDMONEYPAYMENYTYPEPARAMSARRAY,
  getPayImage,
  items,
  paymentFormInputFieldsFuntion,
  paymentTransferTypeTableFilterButtonFunction,
};
