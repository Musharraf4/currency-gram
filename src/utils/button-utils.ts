export const commonButtonFunction = (navigate: any) => {
  return [
    {
      size: "large",
      btnLink: () => {
        navigate("/");
      },
      // disabled: true,
      btnText: "Go To Home",
      type: "primary",
      // ghost: true,
      className: "w-full lg:w-1/2",
    },
  ];
};
