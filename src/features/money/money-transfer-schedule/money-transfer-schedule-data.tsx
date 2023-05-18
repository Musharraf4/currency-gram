import { ICONSCONSTANT } from "../../../constants/icons-constant";

const provinceData = ["Zhejiang", "Jiangsu"];
export const FormInputFieldsFuntion = (pass?: any) => {
  return [
    {
      heading: "",
      fields: [
        {
          id: 1,
          label: "Date",
          name: "date",
          fieldType: "date",
          className: "w-full bg-white",
          size: "large",
          suffixIcon: <ICONSCONSTANT.CalendarOutlined />,
          rules: [{ required: true, message: "Please " }],
        },
        {
          id: 2,
          label: "Repeat",
          name: "repeat",
          fieldType: "select",
          size: "large",
          className: "dynamic-form-select-simple text-start",
          options: provinceData.map((x: any) => ({ value: x, label: x })),
          rules: [{ required: true, message: "Please select the value" }],
        },
      ],
    },
  ];
};

export const MONEYTRANSFERSCHEDULEDATA = {
  FormInputFieldsFuntion,
};
