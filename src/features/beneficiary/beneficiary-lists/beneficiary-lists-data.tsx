import { AppTitle } from "../../../components/data-display/app-title/app-title";
import { BENEFICIARYLISTIMPORT } from "./beneficiary-list-import";
import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";

export const dataSource = [
  {
    key: "1",
    first_name: "John",
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

export const addBeneficiaryColumns = (navigate: any, setIsDeleting: any) => [
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "1",
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    key: "2",
  },
  {
    title: "Nick name",
    dataIndex: "nick_name",
    key: "3",
  },
  {
    title: "Account no",
    dataIndex: "account_no",
    key: "4",
  },
  {
    title: "Sort Code",
    dataIndex: "sort_code",
    key: "5",
  },
  {
    title: "Reference",
    dataIndex: "reference",
    key: "6",
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "7",
    render: (t: any) => (
      <div className="flex items-center">
        <img src={COMMONASSETSCONSTANT.goBackImage} alt="bin" className="cursor-pointer " />
        <span className="ml-2">{t}</span>
      </div>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "8",
    render: (row: any) => (
      <div className="flex " style={{ gap: "15px" }}>
        <div
          onClick={() => {
            setIsDeleting(true);
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
            navigate(
              `${BENEFICIARYLISTIMPORT.BENEFICIARYPATH}${BENEFICIARYLISTIMPORT.SLASHPATH}${BENEFICIARYLISTIMPORT.EDITBENEFICIARYPARAM}${BENEFICIARYLISTIMPORT.SLASHPATH}${row.account_no}`
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
export const singleAndBulkBeneficiaryCardFunction = (navigate: any) => {
  return [
    {
      id: "1",
      heading: "Single Beneficiary",

      description: "Add a single Beneficiary",
      imgSrc: COMMONASSETSCONSTANT.userImage,
      linkPath: () =>
        navigate(
          `${BENEFICIARYLISTIMPORT.BENEFICIARYPATH}${BENEFICIARYLISTIMPORT.SLASHPATH}${BENEFICIARYLISTIMPORT.ADDBENEFICIARYPATH}`
        ),
    },
    {
      id: "2",
      heading: "Multiple Beneficiary",

      description: "Also set up scheduled payments",
      imgSrc: COMMONASSETSCONSTANT.multipleImage,
      linkPath: () =>
        navigate(
          `${BENEFICIARYLISTIMPORT.BENEFICIARYPATH}${BENEFICIARYLISTIMPORT.SLASHPATH}${BENEFICIARYLISTIMPORT.BULKADDBENEFICIARYPATH}`
        ),
    },
  ];
};

export const getPayImage = (name: any) => {
  if (name === "Euro") return COMMONASSETSCONSTANT.euroImage;
  return COMMONASSETSCONSTANT.gbpImage;
};
export const items = (prevPayMethod: any, selectedPayMethod: any, changePayMethod: any) => {
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

export const BENEFICIARYLISTSDATA = {
  addBeneficiaryColumns,
  dataSource,
  singleAndBulkBeneficiaryCardFunction,
};
