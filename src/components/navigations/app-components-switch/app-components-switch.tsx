import { AppTitle } from "../../data-display/app-title/app-title";

export const AppComponentsSwitch = ({ img, onCardClick, showComponent, className, title }: any) => {
  return (
    <div
      className={`text-center  shadow-sm w-28 h-20 py-4 cursor-pointer rounded-lg ${
        title === showComponent
          ? title === "Custom"
            ? "bg-[#06D6A0]"
            : title === "Occasion"
            ? "bg-[#DDAD3E]"
            : "bg-[#3FB6DD]"
          : "bg-primary-background"
      }`}
      onClick={onCardClick}
    >
      <img
        src={img}
        alt={"images"}
        style={{
          filter: `${
            title === showComponent
              ? "grayscale(100%) sepia(100%) brightness(200%) hue-rotate(360deg) saturate(1000%) contrast(1000%)"
              : ""
          }`,
        }}
      />
      <AppTitle
        title={title}
        className={`mt-5 font-semibold text-base ${
          title === showComponent ? "text-white" : "text-primary-text"
        }`}
      />
    </div>
  );
};
