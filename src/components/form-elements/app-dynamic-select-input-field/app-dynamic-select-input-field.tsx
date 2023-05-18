import { FloatingLabel } from "../../data-display/app-floating-label/app-floating-label";
import { SwitchIcon } from "../../../skeleton/switch-with-icon.tsx/switch-with-icon";
import { AppTitle } from "../../data-display/app-title/app-title";
import { DatePicker, Input, Select, Timeline, Upload } from "antd";
import { AppReactQuill } from "../app-react-quill/app-react-quill";

export const AppDynamicSelectInputField = (props: any) => {
  const {
    fieldType,
    value,
    onChange,
    type,
    size,
    suffix,
    prefix,
    showCount,
    disabled,
    allowClear,
    bordered,
    defaultValue,
    id,
    maxLength,
    onPressEnter,
    autoSize,
    onResize,
    loading,
    className,
    label,
    name,
    status,
    options,
    style,
    placement,
    btnIcon,
    fieldName,
    checkedIcon,
    unCheckedIcon,
    defaultChecked,
    autoFocus,
    checked,
    onClick,
    switchBtnShape,
    switchBtnClassName,
    dateRender,
    switchColClassName,
    buttonXs,
    buttonMd,
    offsetXs,
    offsetMd,
    switchXs,
    switchMd,
    globalClassName,
    switchRowClassName,
    items,
    fieldNameClassName,
    popupClassName,
    text,
    readOnly,
    showLabel,
    uploadFieldsProps,
    disabledDate,
  } = props;
  const { Password, TextArea } = Input;
  const uploadFileProps = {
    className: "w-full dynamic-form-upload-full dynamic-form-input-elegant",
    ...uploadFieldsProps,
  };
  return (
    <>
      <FloatingLabel label={label} name={name} value={value} showLabel={showLabel}>
        {fieldType === "input" && (
          <Input
            id={id}
            value={value}
            onChange={(e: any) => onChange?.(e)}
            size={size}
            type={type}
            status={status}
            suffix={suffix}
            prefix={prefix}
            showCount={showCount}
            disabled={disabled}
            allowClear={allowClear}
            name={name}
            bordered={bordered || true}
            defaultValue={defaultValue}
            readOnly={readOnly}
            onPressEnter={(e: any) => onPressEnter?.(e)}
            onResize={(e: any) => onResize?.(e)}
            className={`${globalClassName} ${className}`}
          />
        )}
        {fieldType === "password" && (
          <Password
            id={id}
            value={value}
            onChange={(e: any) => onChange?.(e)}
            size={size}
            type={type}
            status={status}
            suffix={suffix}
            prefix={prefix}
            name={name}
            showCount={showCount}
            disabled={disabled}
            allowClear={allowClear}
            bordered={bordered}
            defaultValue={defaultValue}
            onPressEnter={(e: any) => onPressEnter?.(e)}
            onResize={(e: any) => onResize?.(e)}
            className={`${globalClassName} ${className}`}
          />
        )}

        {fieldType === "textarea" && (
          <TextArea
            id={id}
            value={value}
            onChange={(e: any) => onChange?.(e)}
            size={size}
            autoSize={autoSize}
            status={status}
            maxLength={maxLength}
            showCount={showCount}
            disabled={disabled}
            allowClear={allowClear}
            bordered={bordered}
            style={style}
            defaultValue={defaultValue}
            onPressEnter={(e: any) => onPressEnter?.(e)}
            onResize={(e: any) => onResize?.(e)}
            className={` ${globalClassName} ${className}`}
          />
        )}
        {fieldType === "select" && (
          <Select
            size={size}
            defaultValue={defaultValue}
            onChange={(e: any) => onChange?.(e)}
            style={style}
            options={options}
            status={status}
            popupClassName={popupClassName}
            className={`${className}`}
          />
        )}
        {fieldType === "date" && (
          <DatePicker
            onChange={(e: any) => onChange?.(e)}
            picker={type}
            allowClear={allowClear}
            bordered={bordered}
            className={` ${globalClassName} ${className}`}
            size={size}
            value={value}
            placement={placement}
            placeholder=""
            disabled={disabled}
            dateRender={dateRender}
            status={status}
            style={style}
            disabledDate={(currentDate: any) => disabledDate?.(currentDate)}
          />
        )}
        {fieldType === "text" && (
          <AppTitle title={text} className={className} onClick={(e: any) => onClick?.()} />
        )}
        {fieldType === "timeline" && <Timeline items={items} className={className} />}
        {fieldType === "quill" && <AppReactQuill />}
        {fieldType === "upload" && (
          <Upload {...uploadFileProps}>
            <Input
              id={id}
              value={value}
              onChange={(e: any) => onChange?.(e)}
              size={size}
              type={type}
              status={status}
              suffix={suffix}
              prefix={prefix}
              showCount={showCount}
              disabled={disabled}
              allowClear={allowClear}
              name={name}
              bordered={bordered || true}
              defaultValue={defaultValue}
              readOnly={readOnly}
              onPressEnter={(e: any) => onPressEnter?.(e)}
              onResize={(e: any) => onResize?.(e)}
              className={`${globalClassName} ${className}`}
            />
          </Upload>
        )}
        {fieldType === "switch" && (
          <SwitchIcon
            checkedChildren={checkedIcon}
            unCheckedChildren={unCheckedIcon}
            defaultChecked={defaultChecked}
            size={size}
            disabled={disabled}
            onChange={(e: any) => {
              console.log(e);
              onChange?.(e);
            }}
            loading={loading}
            className={` ${className}`}
            autoFocus={autoFocus}
            onClick={(e: any) => onClick?.(e)}
            checked={checked}
            switchBtnShape={switchBtnShape}
            switchBtnClassName={switchBtnClassName}
            fieldName={fieldName}
            switchColClassName={switchColClassName}
            buttonXs={buttonXs}
            buttonMd={buttonMd}
            offsetSx={offsetXs}
            offsetMd={offsetMd}
            switchXs={switchXs}
            switchMd={switchMd}
            btnIcon={btnIcon}
            switchRowClassName={switchRowClassName}
            fieldNameClassName={fieldNameClassName}
          />
        )}
      </FloatingLabel>
    </>
  );
};
