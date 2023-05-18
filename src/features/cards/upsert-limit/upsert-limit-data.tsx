export const UpsertCardLimitFormFieldsInputFunction = () => {
    return [
        {
            heading: "Using your card",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
            fields: [
                {
                    id: 1,
                    name: "card_limit",
                    label: "Daily Card Limit",
                    fieldType: "input",
                    size: "large",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
        {
            heading: "ATM withdraw",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
            fields: [
                {
                    id: 1,
                    name: "daily_atm_usage",
                    label: "Daily ATM Usage",
                    fieldType: "input",
                    size: "large",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
                {
                    id: 2,
                    label: "Monthly ATM Usage",
                    name: "monthly_atm_usage",
                    fieldType: "input",
                    size: "large",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
        {
            heading: "Outbound",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
            fields: [
                {
                    id: 1,
                    name: "bank_transfer",
                    label: "Daily bank transfer",
                    fieldType: "input",
                    size: "large",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
                {
                    id: 2,
                    name: "pay_currency_gram",
                    label: "Daily payment to currency gram",
                    fieldType: "input",
                    size: "large",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
        {
            heading: "Inbound",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
            fields: [
                {
                    id: 1,
                    name: "top_up_limit",
                    label: "Monthly top up limit",
                    fieldType: "input",
                    size: "large",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
    ];
};

export const UPSERTLIMITDATA = {
    UpsertCardLimitFormFieldsInputFunction
}

// export const PhysicalLimitCardFormFieldsInputFunction = () => {
//     return [
//         {
//             heading: "Using your card",
//             headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
//             fields: [
//                 {
//                     id: 1,
//                     name: "card_limit",
//                     label: "Daily Card Limit",
//                     fieldType: "input",
//                     size: "large",
//                     rules: [{ required: true, message: "Required Field", whitespace: true }],
//                 },
//             ],
//         },
//         {
//             heading: "ATM withdraw",
//             headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
//             fields: [
//                 {
//                     id: 1,
//                     name: "daily_atm_usage",
//                     label: "Daily ATM Usage",
//                     fieldType: "input",
//                     size: "large",
//                     rules: [{ required: true, message: "Required Field", whitespace: true }],
//                 },
//                 {
//                     id: 2,
//                     label: "Monthly ATM Usage",
//                     name: "monthly_atm_usage",
//                     fieldType: "input",
//                     size: "large",
//                     rules: [{ required: true, message: "Required Field", whitespace: true }],
//                 },
//             ],
//         },
//         {
//             heading: "Outbound",
//             headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
//             fields: [
//                 {
//                     id: 1,
//                     name: "bank_transfer",
//                     label: "Daily bank transfer",
//                     fieldType: "input",
//                     size: "large",
//                     rules: [{ required: true, message: "Required Field", whitespace: true }],
//                 },
//                 {
//                     id: 2,
//                     name: "pay_currency_gram",
//                     label: "Daily payment to currency gram",
//                     fieldType: "input",
//                     size: "large",
//                     rules: [{ required: true, message: "Required Field", whitespace: true }],
//                 },
//             ],
//         },
//         {
//             heading: "Inbound",
//             headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4",
//             fields: [
//                 {
//                     id: 1,
//                     name: "top_up_limit",
//                     label: "Monthly top up limit",
//                     fieldType: "input",
//                     size: "large",
//                     rules: [{ required: true, message: "Required Field", whitespace: true }],
//                 },
//             ],
//         },
//     ];
// };

