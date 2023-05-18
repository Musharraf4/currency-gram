import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";

import { setCurrentStep } from "../../../store/layout/layout-slice";
import { BULKADDBENEFICIARYIMPORT } from "./bulk-add-beneficiary-import";

export const bulkbeneficiaryTableFilterButtonFunction = (
  navigate: any,
  csvData: any,
  dispatch: any,
  layout: any,
  setIsAdded: any
) => {
  return [
    {
      size: "large",
      btnLink: () => {
        dispatch(
          setCurrentStep<any>({
            currentStep: 1,
            previousStep: layout.currentStep,
          })
        );
      },
      disabled: !!!csvData?.length,
      btnText: "View All",
      type: "primary",
      ghost: true,
      className: "ml-1 mb-1",
    },
    {
      size: "large",
      btnLink: () => {
        setIsAdded(true);
      },
      disabled: !!!csvData?.length,
      btnText: "Add",
      type: "primary",
      //   ghost: true,
      className: "ml-3 mb-1",
    },
  ];
};
export const bulkbeneficiaryViewAllTableFilterButtonFunction = (navigate: any, setIsAdded: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        setIsAdded(true);
      },
      // disabled: true,
      btnText: "Add",
      type: "primary",
      // ghost: true,
      //   className: "text-primary border-primary ml-1 mb-1",
    },
  ];
};
export const dataSource = [
  {
    key: "1",
    "first Name": "John",
    last_name: "John",
    nick_name: "Johnny",
    account_no: 123123,
    sort_code: 123123,
    reference: "None",
    currency: "British Pound",
  },
  {
    key: "2",
    first_name: "John",
    last_name: "John",
    nick_name: "Johnny",
    account_no: 123123,
    sort_code: 123123,
    reference: "None",
    currency: "British Pound",
    action: 123123,
  },
];

export const bulkAddBeneficiarycolumns = (dispatch: any, layout: any, setIsDeleting: any) => [
  {
    title: "First Name",
    dataIndex: "First name",
    key: "1",
  },
  {
    title: "Last Name",
    dataIndex: "Last name",
    key: "2",
  },
  {
    title: "Nick name",
    dataIndex: "Nick name",
    key: "3",
  },
  {
    title: "Account no",
    dataIndex: "Account no",
    key: "4",
  },
  {
    title: "Sort Code",
    dataIndex: "Sort code",
    key: "5",
  },
  {
    title: "Reference",
    dataIndex: "Reference",
    key: "6",
  },
  {
    title: "Currency",
    dataIndex: "Currency",
    key: "7",
    render: (t: any, row: any) => (
      <div className="flex items-center">
        <img src={COMMONASSETSCONSTANT.currencyImage} alt="bin" className="cursor-pointer " />
        <span className="ml-2">{t}</span>
      </div>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "8",
    render: (t: any, row: any) => (
      <div className="flex " style={{ gap: "15px" }}>
        <div
          onClick={() => {
            setIsDeleting(true);
            dispatch(
              BULKADDBENEFICIARYIMPORT.setBulkBeneficiaryDeleteEntry<any>({
                deleteBulkEntry: row,
              })
            );
          }}
        >
          <img
            src={COMMONASSETSCONSTANT.binImage}
            alt="bin"
            className="cursor-pointer grayscale hover:grayscale-0"
          />
        </div>
        <div
          onClick={() => {
            const editForm = {
              firstName: row?.["First name"],
              lastName: row?.["Last name"],
              nickName: row?.["Nick name"],
              accountNo: row?.["Account no"],
              sortCode: row?.["Sort code"],
              reference: row?.["Reference"],
            };
            dispatch(
              BULKADDBENEFICIARYIMPORT.setBulkBeneficiaryEditForm<any>({
                bulkBeneficiaryEditForm: editForm,
              })
            );
            dispatch(
              setCurrentStep<any>({
                currentStep: 2,
                previousStep: layout.currentStep,
              })
            );
          }}
        >
          <img
            src={COMMONASSETSCONSTANT.editImage}
            alt="bin"
            className="cursor-pointer grayscale hover:grayscale-0"
          />
        </div>
      </div>
    ),
  },
];

export const BULKADDBENEFICIARYDATA = {
  bulkbeneficiaryTableFilterButtonFunction,
  bulkbeneficiaryViewAllTableFilterButtonFunction,
  dataSource,
  bulkAddBeneficiarycolumns,
};
