import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";

export const AppCardWhite = (props: any) => {
  const { children, cardClassName } = props;
  const cardClass = twMergeClass(`bg-white rounded-lg shadow-sm mb-2.5 ${cardClassName}`);
  return <div className={cardClass}>{children}</div>;
};
