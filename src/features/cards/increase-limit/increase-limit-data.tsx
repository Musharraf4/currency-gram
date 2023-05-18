import { Divider } from "antd";
export const increaseLimitButtonFunction = () => {
    return [
        {
            size: "",
            btnText: "Done",
            type: "primary",
            icon: "",
            btnLink: () => { },
            className: "text-base inline-flex justify-evenly items-center h-10 px-7 font-medium",
        },
    ];

};

export const RequestIncreaseLimitFormFieldsInputFunction = () => {
    return [
        {
            heading: "Using your card",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4 mt-5",
            fields: [
                {
                    id: 1,
                    name: "card_limit",
                    label: "Daily Card Limit",
                    fieldType: "input",
                    size: "large",
                    help: "Maximum Limit: £1000",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
        {
            heading: "ATM withdraw",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4 mt-5",
            fields: [
                {
                    id: 1,
                    name: "daily_atm_usage",
                    label: "Daily ATM Usage",
                    fieldType: "input",
                    size: "large",
                    help: "Maximum Limit: £1000",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
                {
                    id: 2,
                    label: "Monthly ATM Usage",
                    name: "monthly_atm_usage",
                    fieldType: "input",
                    size: "large",
                    help: "Maximum Limit: £1000",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
        {
            heading: "Outbound",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4 mt-5",
            fields: [
                {
                    id: 1,
                    name: "bank_transfer",
                    label: "Daily bank transfer",
                    fieldType: "input",
                    size: "large",
                    help: "Maximum Limit: £1000",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
                {
                    id: 2,
                    name: "pay_currency_gram",
                    label: "Daily payment to currency gram",
                    fieldType: "input",
                    size: "large",
                    help: "Maximum Limit: £1000",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
        {
            heading: "Inbound",
            headingClassName: "text-base font-semibold pl-1 text-xl font-weight-600 mb-4 mt-5",
            fields: [
                {
                    id: 1,
                    name: "top_up_limit",
                    label: "Monthly top up limit",
                    fieldType: "input",
                    size: "large",
                    help: "Maximum Limit: £1000",
                    rules: [{ required: true, message: "Required Field", whitespace: true }],
                },
            ],
        },
    ];
};

export const RequestChangesArray = [
    {
        id: 0,
        title: "Using your card",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                divider: <Divider />
            }
        ]
    },
    {
        id: 1,
        title: "Outbound",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                divider: <Divider />
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                divider: <Divider />
            }
        ]
    },
    {
        id: 2,
        title: "Atm withdrawal",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                divider: <Divider />
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                divider: <Divider />
            }
        ]
    },
    {
        id: 3,
        title: "Inbound",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                divider:""
            }
        ]
    }
];

export const requestSubmitButtonFunction = (navigate:any,cardType:any) => {
    return [
        {
            size: "",
            btnText: "Done",
            type: "primary",
            icon: "",
            btnLink: () => navigate('/'),
            className: "text-base inline-flex justify-evenly items-center h-10 px-7 font-medium",
        },
    ];

};

export const INRCREASELIMITDATA = {
    increaseLimitButtonFunction,
    RequestIncreaseLimitFormFieldsInputFunction,
    RequestChangesArray,
    requestSubmitButtonFunction
}