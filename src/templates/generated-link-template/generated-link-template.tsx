import { Button } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppInput } from "../../components/form-elements/app-input/app-input";
import { ICONSCONSTANT } from "../../constants/icons-constant";

export const GeneratedLinkTemplate = (props: any) => {
  const { title, inputValue, btnClick, btnText, iconClick, mainClassName } = props;
  return (
    <div className={mainClassName}>
      <AppTitle title={title} className="font-semibold text-xl text-center mb-5" />

      <AppInput
        size="large"
        readOnly
        value={inputValue}
        inputClassName="text-[#C3C6CB]"
        suffix={<ICONSCONSTANT.CopyOutlined onClick={() => iconClick?.()} />}
      />
      <Button
        size="large"
        type="primary"
        className="bg-primary text-white w-full mt-6"
        onClick={() => btnClick?.()}
      >
        <AppTitle title={btnText} className="font-medium text-sm text-center" />
      </Button>
    </div>
  );
};
