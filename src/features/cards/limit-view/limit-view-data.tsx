import { LIMITVIEWCARDIMAGES } from "./limit-view-images"

export const cardSettingCardFunction = (setIsCard: any) => {
    return [
        {
            id: "1",
            heading: "Personal card",
            description: "Set transaction limits of your account",
            imgSrc: LIMITVIEWCARDIMAGES.UserIcon,
            linkPath: () => setIsCard('Personal card')
        },
        {
            id: "2",
            heading: "Teams",
            description: "Set default limit for team members card",
            imgSrc: LIMITVIEWCARDIMAGES.TeamUser,
            linkPath: () => setIsCard('Teams')
        },
    ];
};

export const physicalCardLimitViewArray = [
    {
        id: 0,
        title: "Using your card   physicalCard",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            }
        ]
    }
];
export const virtualCardLimitViewArray = [
    {
        id: 0,
        title: "Using your card virtualCard",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            }
        ]
    }
];
export const personalCardLimitViewArray = [
    {
        id: 0,
        title: "Using your card  PersonalCard",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            }
        ]
    }
];
export const teamCardLimitViewArray = [
    {
        id: 0,
        title: "Total card limit fot teams",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
            }
        ]
    },
    {
        id: 2,
        title: "Individual team member limit",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
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
                leftAmount: "Left £400.00",
            }
        ]
    },
    {
        id: 4,
        title: "Atm withdrawal",
        transactionCardSubArray: [
            {
                id: 0,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
            },
            {
                id: 1,
                amountTitle: "Daily card transaction limit",
                transactionAmount: "£400.00",
                leftAmount: "Left £400.00",
            }
        ]
    },
];
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
                    options:
                        [
                            {
                                id: 0,
                                label: "Englaid",
                                value: "england"
                            },
                            {
                                id: 1,
                                label: "Pakistan",
                                value: "england"
                            },
                            {
                                id: 2,
                                label: "America",
                                value: "england"
                            },
                        ]
                },
            ],
        },
    ];
};

export const LIMITVIEWDATA = {
    cardSettingCardFunction,
    physicalCardLimitViewArray,
    virtualCardLimitViewArray,
    personalCardLimitViewArray,
    teamCardLimitViewArray,
    RequestPhysicalFormFieldsInputFunction,
}