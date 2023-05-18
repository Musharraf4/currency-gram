export const replaceCardIssueArray = [
  {
    id: 1,
    reason: "Need a new card",
  },
  {
    id: 2,
    reason: "Lost a card",
  },
  {
    id: 3,
    reason: "Card is damaged",
  },
  {
    id: 4,
    reason: "Card got stolen",
  },
];
export const blockCardIssueArray = [

  {
    id: 1,
    reason: "Lost a card",
  },
  {
    id: 2,
    reason: "Card is damaged",
  },
  {
    id: 3,
    reason: "Card got stolen",
  },
];

export const submitButtonFunction = (navigate: any, setShowSubmit: any) => {
  return [
    {
      size: "",
      btnText: "Replace",
      type: "primary",
      icon: "",
      btnLink: () => setShowSubmit(false),
      className: "text-base w-full sm:w-24 mb-4 sm:mt-0 inline-flex justify-evenly items-center h-10 px-7 font-medium mr-3",
    },
    {
      size: "",
      btnText: "Not Now",
      type: "",
      icon: "",
      btnLink: () => navigate(``),
      className: "text-base w-full sm:w-24 mb-4 sm:mt-0 text-[#0073EA] border-[#0073EA] inline-flex justify-evenly items-center h-10 px-7 font-medium",
    },
  ];

};

export const REPORTISSUEDATA = {
  replaceCardIssueArray,
  blockCardIssueArray,
  submitButtonFunction,
}