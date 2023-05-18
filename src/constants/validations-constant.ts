export const MINIMUMPASSWORDLENGTHVALIDATION = 8;
export const MAXIMUMPASSWORDLENGTHVALIDATION = 60;
export const MINIMUMNAMELENGTH = 2;
export const MAXIMUMNAMELENGTH = 20;

export const MINIMUMACCOUNTNUMBERLENGTH = 8;
export const MINIMUMSORTNUMBERLENGTH = 6;
export const MAXIMUMADDRESSLENGTH = 255;
export const MAXIMUMCITYLENGTH = 85;
export const MAXIMUMPOSTCODELENGTH = 10;
export const MAXIMUMPHONENUMBERLENGTH = 13;
export const MAXIMUMBUSINESSNAMELENGTH = 85;
export const MAXIMUMBUSINESSSECTORNAMELENGTH = 85;
export const MAXIMUMCHARITYNAMELENGTH = 85;
export const MAXIMUMBUSINESSINFORMATIONLENGTH = 3000;
export const MAXIMUMISSUEDETAILLENGTH = 3000;
export const MINIMUMPRICE = 0;
export const MAXUPLOADCSVFILESIZE = 1024 * 1024;

// regex  //
export const ATLEASTONEDIGITVALIDATION = /^(?=.{1,300}$)\D*\d/; // eslint-disable-line
export const ATLEASTONEUPPERCASEVALIDATION = /^(?=.*[A-Z])/; // eslint-disable-line
export const ATLEASTONELOWERCASEVALIDATION = /^(?=.*[a-z])/; // eslint-disable-line
export const ATLEASTONESPECIALCHARACTERVALIDATION = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]/g; // eslint-disable-line
export const ALLCHARACTERSONLYVALIDATION = /^[aA-zZ]+$/; // eslint-disable-line
export const ALLCASECHARACTERSONLYVALIDATION = /^(?=.*[a-z])(?=.*[A-Z])/; // eslint-disable-line
export const ALPHANUMERICVALIDATION = /^.[a-zA-Z0-9]+$/; // eslint-disable-line
export const ALPHANUMERICWITHBASICCHARACTERSVALIDATION = /^.[a-zA-Z0-9\s_-]+$/; // eslint-disable-line

export const BOTHAPLHANUMERICVALIDATION = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/; // eslint-disable-line
export const ALPHANUMERICBUTNOTNUMERICALONEVALIDATION = /^(?!^\d*$)[a-zA-Z\d\s]*$/; // eslint-disable-line
export const ALPHANUMERICANDCHARACTERS = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\s])([a-zA-Z0-9\s]+)$/; //eslint-disable-line
export const ALPHANUMERICANDOTHERSBASICCHARACTERS =
  /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\s])(?=.*[-_])([a-zA-Z0-9\s_-]+)$/; //eslint-disable-line

export const ONLYNUMERICVALUESVALIDATION = /^[0-9]*$/; //eslint-disable-line
export const GREATERTHANZEROVALIDATION = /^0*?[1-9]\d*$/; //eslint-disable-line

export const UKNUMBERVALIDATION = /^\+44\d{10}$/; // eslint-disable-line
export const ONLYAPLHABETSWITHNOSPACEATSTART = /^[A-Za-z]+[A-Za-z ]*$/; // eslint-disable-line
