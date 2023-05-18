import { Button, Col, Row, Switch } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const SwitchIcon = (props: any) => {
  const {
    onChange,
    size,
    disabled,
    loading,
    className,
    btnIcon,
    fieldName,
    checkedIcon,
    unCheckedIcon,
    defaultChecked,
    autoFocus,
    checked,
    onClick,
    switchClassName,
    switchBtnShape,
    switchBtnClassName,
    switchColClassName,
    buttonXs,
    buttonMd,
    switchMd,
    switchXs,
    offsetMd,
    offsetXs,
    switchRowClassName,
    fieldNameClassName,
    btnType,
    btnGhost,
    buttonClassName,
  } = props;
  return (
    <>
      <Row className={switchRowClassName}>
        <Col xs={buttonXs || 17} md={buttonMd} className={buttonClassName}>
          {!!btnIcon && (
            <Button
              shape={switchBtnShape}
              className={switchBtnClassName}
              type={btnType}
              ghost={btnGhost}>
              {btnIcon}
            </Button>
          )}
          {/* <span> {fieldName}</span> */}
          {!!fieldName && (
            <AppTitle className={fieldNameClassName} title={fieldName} Variant="span" />
          )}
        </Col>
        <Col xs={offsetXs || 3} md={offsetMd}></Col>
        <Col xs={switchXs || 4} md={switchMd} className={`text-end ${switchColClassName}`}>
          <Switch
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
            className={`${switchClassName}`}
            autoFocus={autoFocus}
            onClick={(e: any) => onClick?.(e)}
            checked={checked}
          />
        </Col>
      </Row>
    </>
  );
};
