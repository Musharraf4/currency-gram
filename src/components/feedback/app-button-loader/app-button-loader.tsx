import { Spin } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";

export const AppButtonLoader = (props: any) => {
  const { loaderText } = props;
  return (
    <div className="items-center flex justify-center">
      <Spin size="small" />
      <AppTitle Variant="span" title={loaderText} className="ml-2 text-sm font-medium" />
    </div>
  );
};
