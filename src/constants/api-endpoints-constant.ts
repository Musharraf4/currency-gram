export const REQUESTSTATUS = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
};

export const HTTPMETHODS = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

export const BASEURLBACKEND = `${process.env.REACT_APP_BASE_URL_BACKEND}`;
export const IMAGEBASEURL = `${process.env.REACT_APP_BASE_IMAGE_URL}`;
export const DEMOAPI = "/demo";

export const SIGNUPAPI = "auth/signup";
export const LOGINAPI = "auth/signin";
export const LOGOUTAPI = "auth/signout";
export const VERIFYEMAILAPI = "auth/verify-email";
export const RESENDEMAILAPI = "auth/resend-link";
export const REFRESHTOKENAPI = "auth/refresh-token";
export const FORGOTPASSWORDAPI = "auth/forgot-password";
export const RESETPASSWORDAPI = "auth/confirm-forgot-password";
export const CHANGEPASSWORDAPI = "auth/change-password";
export const CHANGEEMAILAPI = "auth/change-email";
export const VERIFYCHANGEEMAILAPI = "auth/verify-change-email";

export const REFERENCEDATAAPI = "reference-data";

export const USERNOTIFICATIONSAPI = "user-notifications";
export const USERNOTIFICATIONSLATESTAPI = "user-notifications/latest";
export const USERNOTIFICATIONSREADAPI = "user-notifications/read";
export const USERNOTIFICATIONSREADALLAPI = "user-notifications/read-all";
export const USERNOTIFICATIONSUNREADAPI = "user-notifications/unread";
export const USERNOTIFICATIONSUNREADALLAPI = "user-notifications/unread-all";
export const USERNOTIFICATIONSDELETEAPI = "user-notifications/delete";
export const USERNOTIFICATIONSDELETEALLAPI = "user-notifications/delete-all";

export const MYPERSONALPROFILEDETAILSAPI = "user-profile/my-profile";
export const MYPERSONALPROFILEIMAGECHANGEAPI = "user-profile/update-profile-image";
export const MYPERSONALPROFILEEDITAPI = "user-profile/edit-profile";
export const MYPERSONALPROFILEADDDOCUMENTAPI = "user-profile/add-document";
export const MYPERSONALPROFILEEDITDOCUMENTAPI = "user-profile/edit-document";
export const MYPERSONALPROFILEDELETEDOCUMENTAPI = "user-profile/delete-document";

export const USERS = "users";
export const ADMINUSERS = "users/admin-users";
export const USERSRIGHTS = "user-rights";
export const BACKUPAPI = "backups";
