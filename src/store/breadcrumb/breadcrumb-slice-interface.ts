export interface IBREADCRUMBSTATE {
    showBreadcrumb: boolean;
    breadcrumbData: IBREADCRUMBDATA | null
  }
  
  export interface IBREADCRUMBDATA {
    firstLink: any;
    firstLinkName: string;
    otherBreadcrumbs?: IOTHERBREADCRUMBS[]
  }
  
  export interface IOTHERBREADCRUMBS {
    id: number | string,
    linkName: string,
    className: string,
    linkPath?: any
  }