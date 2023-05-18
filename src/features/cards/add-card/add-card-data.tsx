import { ADDCARDIMAGES } from "./add-card-images"
import { AppTitle } from "../../../components/data-display/app-title/app-title";


export const AddVirtualCardFormFieldsInputFunction = () => {
  return [
    {
      fields: [
        {
          id: 6,
          label: "Select Account",
          name: "country",
          fieldType: "select",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
          options: [
            {
              id: 0,
              label: (
                <div className="flex items-center py-1">
                  <img src={ADDCARDIMAGES?.ukFlag} alt="uk flag" className="mr-2" width={20} />
                  <AppTitle Variant="span" title="69964821" />
                </div>
              ),
              value: "69964821",
            },
            {
              id: 1,
              label: (
                <div className="flex items-center py-1">
                  <img
                    src={ADDCARDIMAGES.europeanUnionFlag}
                    alt="european Union Flag"
                    className="mr-2"
                    width={20}
                  />
                  <AppTitle Variant="span" title="9964820" />
                </div>
              ),
              value: "69964820",
            },
          ],
        },
      ],
    },
  ];
};

export const RequestPhysicalFormFieldsInputFunction = () => {
  return [
    {
      fields: [
        {
          id: 1,
          label: "John",
          name: "first_name",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 2,
          label: "Allen",
          name: "second_name",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 3,
          label: "Post code",
          name: "Post_code",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 4,
          label: "Address",
          name: "address",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 5,
          label: "City",
          name: "city",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 6,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
          options: [
            {
              id: 0,
              label: "Englaid",
              value: "england",
            },
            {
              id: 1,
              label: "Pakistan",
              value: "england",
            },
            {
              id: 2,
              label: "America",
              value: "england",
            },
          ],
        },
      ],
    },
  ];
};


export const GetPhysicalFormFieldsInputFunction = () => {
  return [
    {
      fields: [
        {
          id: 1,
          label: "Post code",
          name: "Post_code",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 2,
          label: "Adress",
          name: "adress",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 3,
          label: "City",
          name: "city",
          fieldType: "input",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
        },
        {
          id: 4,
          label: "Country",
          name: "country",
          fieldType: "select",
          size: "large",
          rules: [{ required: true, message: "Required Field", whitespace: true }],
          options: [
            {
              id: 0,
              label: "Englaid",
              value: "england",
            },
            {
              id: 1,
              label: "Pakistan",
              value: "england",
            },
            {
              id: 2,
              label: "America",
              value: "england",
            },
          ],
        },
      ],
    },
  ];
};

export const closeAccountButtonFunction = (setShowSuccessModal: any) => {
  return [
    {
      size: "large",
      btnLink: () => setShowSuccessModal(true),
      btnText: "Save",
      type: "primary",
      className: "text-base  font-medium mb-3 w-full",
    },
    {
      size: "large",
      btnLink: () => setShowSuccessModal(true),
      btnText: "Skip",
      type: "",
      ghost: true,
      className: "text-base  font-medium mb-1 w-full text-[#0073EA]",
    },
  ];
};

export const ADDCARDDATA = {
  AddVirtualCardFormFieldsInputFunction,
  RequestPhysicalFormFieldsInputFunction,
  GetPhysicalFormFieldsInputFunction,
  closeAccountButtonFunction
}
