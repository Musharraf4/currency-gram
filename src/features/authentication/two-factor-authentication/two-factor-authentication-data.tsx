import { COMMONASSETSCONSTANT } from "../../../constants/common-assets-constant";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const twoFactorAuthFormInputFieldsFuntion = (showFields: any, setShowFields: any) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Current Password",
          name: "currentPassword",
          size: "large",
          className: "dynamic-form-input-elegant ",
          suffix: <ICONSCONSTANT.EditOutlined className="text-grey" />,
          prefix: <img src={COMMONASSETSCONSTANT.gbpImage} className="mr-2" />,
          rules: [{ required: true, message: "Please enter the  password", whitespace: true }],
          fieldType: "input",
          showLabel: "hidden",
          initialValue: "24433244244",
        },
        {
          id: 2,
          text: "You can receive an SMS to this number in case you don’t receive a login notification.",
          fieldType: "text",
          className: "text-primary-text text-sm",
        },
        {
          id: 3,
          text: showFields ? "Backup phone number" : "Add a backup phone number",
          fieldType: "text",
          onClick: () => setShowFields?.(true),
          className: `text-primary text-xs  ${showFields && "text-primary-text"}`,
        },
        {
          id: 4,
          label: "Current Password",
          name: "currentPassword",
          size: "large",
          showField: showFields,
          className: "dynamic-form-input-elegant",
          suffix: <ICONSCONSTANT.EditOutlined className="text-grey" />,
          prefix: <img src={COMMONASSETSCONSTANT.gbpImage} className="mr-2" />,
          rules: [{ required: true, message: "Please enter the  password", whitespace: true }],
          fieldType: "input",
          showLabel: "hidden",
          initialValue: "24433244244",
        },
      ],
    },
  ];
};
