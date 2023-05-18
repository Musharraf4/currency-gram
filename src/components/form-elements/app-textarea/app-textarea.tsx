import { Input } from "antd";
import { twMergeClass } from "../../../lib/tw-merge-override-class-lib";

export const AppTextArea = (props: any) => {
  const {
    placeholder,
    onChange,
    prefix,
    inputClassName,
    allowClear,
    readOnly,
    size,
    value,
    bordered,
    maxLength,
    showCount,
    autoSize,
    rows,
  } = props;
  const inputClass = twMergeClass(
    `mb-4 bg-input-background rounded-lg px-3.5 py-2.5 text-sm ${inputClassName}`
  );
  const { TextArea } = Input;
  return (
    <TextArea
      className={inputClass}
      placeholder={placeholder}
      size={size ?? "large"}
      onChange={(e: any) => onChange?.(e)}
      prefix={prefix}
      bordered={bordered ?? true}
      allowClear={allowClear ?? false}
      readOnly={readOnly ?? false}
      value={value}
      maxLength={maxLength}
      showCount={showCount ?? false}
      autoSize={autoSize ?? { minRows: 5, maxRows: 5 }}
      rows={rows ?? 6}
    />
  );
};
