export const ReportDeliveryAddressFormFieldsInputFunction = () => {
  return [
    {
      fields: [
        {
          id: 1,
          label: "Post code",
          name: "post_code",
          fieldType: "input",
          size: "large",
          rules: [
            { required: true, message: "Required Field", whitespace: true },
          ],
        },
        {
          id: 2,
          label: "Address",
          name: "address",
          fieldType: "input",
          size: "large",
          rules: [
            { required: true, message: "Required Field", whitespace: true },
          ],
        },
        {
          id: 3,
          label: "City",
          name: "city",
          fieldType: "input",
          size: "large",
          rules: [
            { required: true, message: "Required Field", whitespace: true },
          ],
        },
        {
          id: 4,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          rules: [
            { required: true, message: "Required Field", whitespace: true },
          ],
          options: [
            {
              id: 0,
              label: "Englaid",
              value: "england",
            },
            {
              id: 1,
              label: "Pakistan",
              value: "pakistan",
            },
            {
              id: 2,
              label: "America",
              value: "america",
            },
          ],
        },
      ],
    },
  ];
};


export const REPORTDELIVERYADDRESS = {
  ReportDeliveryAddressFormFieldsInputFunction
}
