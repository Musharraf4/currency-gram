export const ChangePinFormFieldsInputFunction = () => {
  return [
    {
      fields: [
        {
          id: 1,
          label: "Old Pin",
          name: "old_pin",
          fieldType: "password",
          className: 'dynamic-form-input-elegant',
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 2,
          label: "New Pin",
          name: "new_pin",
          fieldType: "password",
          className: 'dynamic-form-input-elegant',
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 3,
          label: "Confirm Pin",
          name: "confirm_pin",
          fieldType: "password",
          className: 'dynamic-form-input-elegant',
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
      ],
    },
  ];
};

export const CHANGEPINDATA = {
  ChangePinFormFieldsInputFunction
}