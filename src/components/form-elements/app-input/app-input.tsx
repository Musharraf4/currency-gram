import { Input } from "antd";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";

export const AppInput = (props: any) => {
  const {
    placeholder,
    onChange,
    prefix,
    suffix,
    inputClassName,
    type = "text",
    allowClear = false,
    readOnly = false,
    size = "large",
    value,
    bordered = true,
  } = props;
  const inputClass = twMergeClass(
    `mb-4 bg-input-background rounded-lg px-3.5 py-2.5 text-sm dynamic-form-input-elegant ${inputClassName}`
  );
  return (
    <Input
      className={inputClass}
      placeholder={placeholder}
      size={size}
      type={type}
      onChange={(e: any) => onChange?.(e)}
      prefix={prefix}
      suffix={suffix}
      bordered={bordered}
      allowClear={allowClear}
      readOnly={readOnly}
      value={value}
    />
  );
};
