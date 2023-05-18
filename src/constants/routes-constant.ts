export const EMPTYPATH = "";
export const SLASHPATH = "/";
export const HASHPATH = "#";
export const HOMEPATH = "/home";
export const DASHBOARDPATH = "/dashboard";

export const MAILPATH = "/mail";
export const SENTEMAILPATH = "sent-email";

export const AUTHENTICATIONPATH = "/authentication";
export const SIGNINPATH = "/authentication/signin";
export const SIGNINDELEGATEPATH = "/authentication/signin-delegate";
export const SIGNUPPATH = "/authentication/signup";
export const SIGNUPDELEGATEPATH = "/authentication/signup-delegate";
export const SIGNUPDELEGATEVERIFYPATH = "/authentication/signup-delegate-verify";
export const RESETPASSWORDPATH = "/authentication/reset-password";
export const FORGOTPASSWORDPATH = "/authentication/forgot-password";
export const EMAILVERIFICATIONPATH = "/authentication/email-verify";
export const CHANGEEMAILVERIFICATIONPATH = "/authentication/change-email-verify";
export const LOGOUTPATH = "/log-out";

export const NOTFOUNDPATH = "/not-found";
export const UNAUTHORIZEDPATH = "/unauthorized";

export const PROFILEMANAGEMENTPATH = "/profile-management";
export const BUSINESSPROFILEPATH = "business";
export const PROFILEPATH = "profile";
export const EDITPROFILEPATH = "edit-profile";
export const CHANGEEMAILPATH = "change-email";
export const CHANGEPASSWORDPATH = "change-password";

export const HELPPATH = "/help";
export const CASELISTSPATH = "resolution-center/cases-lists";
export const CASEDETAILSPATH = "resolution-center/case-details/:id";
export const ADDCASEPATH = "resolution-center/add-case";
export const FAQPATH = "faq";

export const SETTINGSPATH = "/settings";
export const ACCOUNTSETTINGSPATH = "account-settings";

export const BENEFICIARYPATH = "/beneficiary";
export const BENEFICIARYLISTSPATH = "lists";
export const ADDBENEFICIARYPATH = "add";
export const EDITBENEFICIARYPATH = "edit/:id";
export const BULKADDBENEFICIARYPATH = "bulk-add";
export const BULKADDBENEFICIARYVIEWALLPATH = "bulk-add/view-all";
export const EDITBENEFICIARYPARAM = "edit";

export const TRANSACTIONPATH = "/transaction";
export const ACCOUNTSTATEMENTLISTSPATH = "account-statement-lists";
export const TRANSACTIONDETAILSPATH = "details/:id";
export const TRANSACTIONDETAILSPARAM = "details";

export const CARDSPATH = "/card";
export const CARDSETTINGSPATH = "settings";
export const ADDCARDPATH = "add-card/:cardType";
export const ADDCARDPARAM = "add-card";
export const LIMITVIEWPATH = "view-limit/:cardType";
export const INCREASELIMITVIEWPATH = "increase-limit/:cardType";
export const INCREASELIMITVIEWPARAM = "increase-limit";
export const LIMITVIEWPARAM = "view-limit";
export const UPSERTLIMITPATH = "edit-limit/:cardType";
export const UPSERTLIMITPARAM = "edit-limit";
export const ADDTOWALLETPATH = "add-to-wallet/:cardType/:walletType";
export const ADDTOWALLETPARAM = "add-to-wallet";
export const REPORTCARDISSUEPATH = "report-card";
export const REPORTCARDISSUEPARAM = "report-card";
export const CHANGECARDPINPATH = "change-pin";
export const REPORTCARDISSUETYPEPATH = "report-card/:issueType";

export const TEAMSMANAGEMENTPATH = "team-management";
export const ADDTEAMPATH = "add-team";
export const TEAMROLEDETAILSPATH = "details/:role";
export const TEAMMEMBERDETAILPATH = "member-details/:id";
export const TEAMMEMBERREASSIGNROLEPATH = "member-details/:id/reassign-role";
export const TEAMROLEDETAILSPARAM = "details";
export const TEAMMEMBERDETAILSPARAM = "member-details";

export const CURRENCYGRAMTOCURRENCYGRAMLISTSPATH = "currency-gram-lists";
export const CURRENCYGRAMTOCURRENCYGRAMSINGLEPAYMENTPATH = "currency-gram/single-payment";
export const MONEYPATH = "/money";
export const SENDMONEYPATH = "/send-money";
export const MONEYTRANSFERTYPEPATH = ":transferType";
export const MONEYTRANSFERPAYMENTTYPEPATH = ":transferType/:paymentType";
export const MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPATH =
  ":transferType/:paymentType/account-details";
export const MONEYTRANSFERPAYMENTTYPETRANSFERPATH = ":transferType/:paymentType/transfer";
export const MONEYTRANSFERPAYMENTTYPESUCCESSPATH = ":transferType/:paymentType/success";
export const MONEYTRANSFERPAYMENTTYPESCHEDULEPATH = ":transferType/:paymentType/schedule";
export const MONEYTRANSFERPAYMENTTYPEVIEWALLPATH = ":transferType/:paymentType/view-all";
export const MONEYTRANSFERPAYMENTTYPEADDPATH = ":transferType/:paymentType/add";
export const MONEYTRANSFERPAYMENTTYPEEDITPATH = ":transferType/:paymentType/edit";
export const MONEYTRANSFERPAYMENTTYPEACCOUNTDETAILSPARAM = "account-details";
export const MONEYTRANSFERPAYMENTTYPETRANSFERPARAM = "transfer";
export const MONEYTRANSFERPAYMENTTYPESUCCESSPARAM = "success";
export const MONEYTRANSFERPAYMENTTYPESCHEDULEPARAM = "schedule";
export const MONEYTRANSFERPAYMENTTYPEVIEWALLPARAM = "view-all";
export const MONEYTRANSFERPAYMENTTYPEADDPARAM = "add";

export const ADDMONEYPATH = "/add-money";

export const MOREPATH = "/more";
export const REQUESTSPATH = "request";
export const REQUESTSDETAILSPARAM = "request";
export const REQUESTSDETAILSPATH = "request/:id";

export const GIFTPATH = "gift";
export const ADDGIFTCARDPATH = "gift/add-gift/select-gift-card";
export const ADDGIFTDETAILPATH = "gift/add-gift/detail";
export const SELECTGIFTRECIPIENTPATH = "gift/add-gift/select-recipient";
export const SHAREDGIFTCARDLINK = "gift/add-gift/shared-link";
export const GIFTDETAILSPATH = "gift/details/:id";

export const PAYMENTPATH = "payment";
export const PAYMENTDETAILPATH = "payment/details/:paymentDetail";
export const PAYMENTDETAILPARAM = "details";

export const DELEGATEMEMBERPATH = "/delegate-member";
export const WITHDRAWALAMOUNTPATH = "/withdrawal";
export const WITHDRAWALADDAMOUNTPATH = "add-amount";
export const WITHDRAWALREMOVEAMOUNTPATH = "withdraw";
