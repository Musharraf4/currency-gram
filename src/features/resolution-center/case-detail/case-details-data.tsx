const caseDetails = [
  {
    key: "Contact",
    value: "+44032409",
  },
  {
    key: "Status",
    value: "Pending",
    valueClassName: "text-[#FFCC00]",
  },
  {
    key: "Transaction ID:",
    value: "658922",
  },
];

const problemDetailsData = {
  heading: "Problem",
  account: "GBP",
  issueType: "Transaction",
  transactionId: "23434",
  transactionModaldetails: "Thur, Dec 15,2022",
  describedIssue:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing elit.ipsum",
  attachments: "sd",
  transferredTo: "Naeem Khan",
  amount: "23",
  subHeading1: "Account:",
  subHeading2: "Issue type:",
  subHeading3: "Transaction ID",
  subHeading4: "Your Described Issue:",
  subHeading5: "Attachments:",

  detailsText: "Show Details",
};

const transactionDetailData = [
  { title: "Transaction ID:", value: "120457496" },
  { title: "Transaction date:", value: "Thur, Dec 15,2022" },
  { title: "Transferred to:", value: "Naeem khan" },
  { title: "Amount:", value: "£50.19" },
];

const commentsModalData = [
  {
    date: "Dec 22, 2022 ",
    message:
      "Thank you for your respond. But I am facing with the same issue. My problem have not been resolved. Please check and resolve it properly.",
  },
  {
    date: "Dec 22, 2022 ",
    message:
      "Thank you for your respond. But I am facing with the same issue. My problem have not been resolved. Please check and resolve it properly.",
  },
];

const commentsCardData = {
  heading: "Case Reopen Reasons:",
  date: "Dec 22, 2022",
  comment:
    "Thank you for your respond.But I am facing with the same issue. My problem have not been resolved.Please check and resolve it properly.",
  modalText: "Show All",
  showModalText: true,
};

export const CASEDETAILSDATA = {
  caseDetails,
  commentsCardData,
  commentsModalData,
  problemDetailsData,
  transactionDetailData,
};
