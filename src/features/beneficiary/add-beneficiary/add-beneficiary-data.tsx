import { ADDBENEFICIARYIMPORT } from "./add-beneficiary-import";

export const beneficiaryInputDataFunction: any = () => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          type: "text",
          name: "firstName",
          label: "First Name",
          fieldType: "input",
          rules: ADDBENEFICIARYIMPORT.firstNameFieldRules,
        },
        {
          id: 2,
          type: "text",
          name: "lastName",
          label: "Last Name",
          fieldType: "input",
          rules: ADDBENEFICIARYIMPORT.lastNameFieldRules,
        },
        {
          id: 3,
          type: "text",
          name: "nickName",
          label: "Nick Name",
          fieldType: "input",
          rules: ADDBENEFICIARYIMPORT.nickNameFieldRules,
        },
        {
          id: 4,
          type: "number",
          name: "accountNo",
          label: "Account No",
          fieldType: "input",
          rules: ADDBENEFICIARYIMPORT.accountNoFieldRules?.(),
        },
        {
          id: 5,
          type: "number",
          name: "sortCode",
          label: "Sort Code",
          fieldType: "input",
          rules: ADDBENEFICIARYIMPORT.sortCodeFieldRules?.(),
        },
        {
          id: 6,
          type: "text",
          name: "reference",
          label: "Reference (optional)",
          fieldType: "input",
        },
      ],
    },
  ];
};

export const ADDBENEFICIARYDATA = {
  beneficiaryInputDataFunction,
};
