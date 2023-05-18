export interface ISIDEBARDATA {
  id: string;
  title: string;
  path: string;
  allowedRoles?: any;
  iconClosed?: JSX.Element;
  // icon?: JSX.Element;
  icon?: any;
  iconOpened?: JSX.Element;
  subNav?: ISIDEBARDROPDOWN[];
}

export interface ISIDEBARICONS {
  id?: string;
  icon?: JSX.Element;
  path: string;
}

export interface ISIDEBARDROPDOWN {
  id: string;
  title: string;
  allowedRoles?: any;
  path: string;
}

export interface ISIDEBARMENU {
  item: ISIDEBARDATA;
}
