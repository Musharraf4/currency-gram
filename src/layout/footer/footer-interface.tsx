export interface IFOOTERICONS {
    id: string;
    icon: JSX.Element;
    path: string;
  }

  export interface IFOOTERCONTENT {
    id: string;
    text: string;
    path: string;
  }
  
//Sales Site Footer Data
export interface IFOOTERDATA {
  title: string;
  content: {
      subTitle: string;
      link:string;
  }[];
}