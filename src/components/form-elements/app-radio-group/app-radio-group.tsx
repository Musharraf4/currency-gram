import { Radio } from "antd";
import { RadioWithLabelSkeleton } from "../../../skeleton/radio-with-label/radio-with-label";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";

export const AppRadioGroup = (props: any) => {
  const { radioItems, radioRowClassName, radioLabelClassName } = props;
  const radioLabelClass = twMergeClass(
    `text-sm text-primary-text mb-4 font-normal ${radioLabelClassName}`
  );
  return (
    <>
      {radioItems?.length &&
        radioItems?.map((radioItem: any) => (
          <div className="w-full">
            <Radio.Group
              key={radioItem?.radioValue}
              className="block"
              onChange={(e: any) => radioItem?.onChange?.(e)}
              value={radioItem?.radioValue}>
              <RadioWithLabelSkeleton
                radioData={radioItem?.data}
                radioLabelClassName={radioLabelClass}
                radioColClassName="text-end"
                radioRowClassName={radioRowClassName}
              />
            </Radio.Group>
          </div>
        ))}
    </>
  );
};
