import { BLOGIMAGES } from "./blog-images";

export const moreBlogDataFunction = () => [
  {
    mainTitle: "Recent Posts",
    data: [
      {
        heading: "Keystone Athletics Champions Athlete Well-Being And Success",
        date: "January 21, 2021",
        imgSrc: BLOGIMAGES.b1Image,
        setPositionClass: "flex-row-reverse",
      },
      {
        heading: "Keystone Athletics Champions Athlete Well-Being And Success",
        date: "January 21, 2021",
        imgSrc: BLOGIMAGES.b2Image,
        setPositionClass: "flex-row-reverse",
      },
      {
        heading: "Keystone Athletics Champions Athlete Well-Being And Success",
        date: "January 21, 2021",
        imgSrc: BLOGIMAGES.b3Image,
      },
      {
        heading: "Keystone Athletics Champions Athlete Well-Being And Success",
        date: "January 21, 2021",
        imgSrc: BLOGIMAGES.b4Image,
        setPositionClass: "flex-row-reverse",
      },
      {
        heading: "Keystone Athletics Champions Athlete Well-Being And Success",
        date: "January 21, 2021",
        imgSrc: BLOGIMAGES.b2Image,
        setPositionClass: "flex-row-reverse",
      },
    ],
  },
];

export const moreCategoriesFunction = () => [
  {
    mainTitle: "Categories",
    data: ["Olympics", "Gymnasym", "Sports", "Olympics", "Gymnasym", "Sports"],
  },
];

export const archievesFunction = () => [
  {
    mainTitle: "Archieves",
    data: ["January 2021", "Febuary 2022", "March 2021", "April 2021"],
  },
];

export const singleBlog = {
  heading: `MEET RAE WELLS: ATH-ALLEN PERFORMANCE COACH`,
  coverImage: BLOGIMAGES.coverBlogImage,
  publishedDate: "11 Jan 2022",
  user: "John doe",
  comments: 0,
  content: (
    <>
      <div className="text-[#4F4F4F] text-sm font-normal my-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker.{" "}
      </div>
      <div className="text-lg text-[#333333] font-medium my-3">
        Digital technology on the cutting edge
      </div>
      <div className="text-[#4F4F4F] text-sm font-normal my-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea consectetur repellendus
        obcaecati molestiae fugit! Aut eius culpa officia laboriosam minima laborum beatae cum ipsam
        doloremque ratione? Officiis itaque nam doloremque, iste, ea blanditiis ipsam sapiente ipsa
        sequi dolorem impedit aut.
      </div>
      <ul className="text-[#4F4F4F] text-sm font-normal my-3">
        <li className="text-[#4F4F4F] text-sm font-normal my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.
        </li>
        <li className="text-[#4F4F4F] text-sm font-normal my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.
        </li>
        <li className="text-[#4F4F4F] text-sm font-normal my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.
        </li>
        <li className="text-[#4F4F4F] text-sm font-normal my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.
        </li>
        <li className="text-[#4F4F4F] text-sm font-normal my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.
        </li>
        <li className="text-[#4F4F4F] text-sm font-normal my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.
        </li>
      </ul>
      <div className="text-[#4F4F4F] text-sm font-normal my-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </div>

      <img src={BLOGIMAGES.secondBlogImage} className="w-full" alt="" />
      <div className="text-[#4F4F4F] text-sm font-normal my-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </div>

      <div className="text-[#4F4F4F] text-sm font-normal my-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </div>
    </>
  ),
};

export const replyButtonFunction = (setIsAdded?: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        setIsAdded(true);
      },
      // disabled: true,
      shape: "round",
      btnText: "Submit",
      type: "primary",
      // ghost: true,
      className: " ml-1 mb-1",
    },
  ];
};

export const detailAboutPostFunction = () => [
  {
    heading: "January 31. 2021",
    imgSrc: BLOGIMAGES.calendarImage,
  },
  {
    heading: "John Doe",
    imgSrc: BLOGIMAGES.userBlueImage,
  },
  {
    heading: "0 Comments",
    imgSrc: BLOGIMAGES.commentBlueImage,
  },
];

export const BLOGDATA = {
  moreBlogDataFunction,
  moreCategoriesFunction,
  archievesFunction,
  singleBlog,
  replyButtonFunction,
  detailAboutPostFunction,
};
