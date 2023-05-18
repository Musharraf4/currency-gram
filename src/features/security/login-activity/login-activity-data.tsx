import mobile from "../../../assets/icons/mobile.svg";
import laptop from "../../../assets/icons/laptop.svg";

export const loginActivityDataFunction = (setSelectedCard?: any) => [
  {
    // title: "Security",
    child: [
      {
        // heading: "London, United Kingdom",
        heading: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem fuga vitae nulla, accusantium, est optio ex asperiores laborum aperiam ipsam reprehenderit aut neque voluptas officia consequuntur mollitia cum nobis quia sed voluptatum perspiciatis suscipit dolor! Iste recusandae nulla adipisci veritatis amet tenetur eligendi quis incidunt dolores? Alias ex incidunt expedita.`,
        imgSrc: mobile,
        description: "Huawei Y9 Prime",
        subtitle: "Active Now",
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "London, United Kingdom",
        description: "Macbook Pro Air",
        subtitle: "Nov, 10, 2022",
        imgSrc: laptop,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "London, United Kingdom",
        description: "Huawei Y9 Prime",
        subtitle: "Nov, 10, 2022",
        imgSrc: mobile,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "London, United Kingdom",
        description: "Macbook Pro Air",
        subtitle: "Mar, 3, 2023",
        imgSrc: laptop,
        linkPath: (e: any, active: any) => {
          console.log(e);
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
];
