import { Avatar, Button, Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const ButtonIcon = (props: any) => {
  const {
    btnIcon,
    fieldName,
    mainBtnColClassName,
    iconBtnShape,
    iconBtnClassName,
    buttonXs,
    buttonMd,
    mainBtnMd,
    mainBtnXs,
    offsetMd,
    offsetXs,
    btnIconRowClassName,
    fieldNameClassName,
    btnType,
    btnGhost,
    mainBtnClassName,
    mainBtnText,
    mainBtnFunction,
    mainBtnSize,
    mainBtnType,
    mainBtnGhost,
    btnSize,
  } = props;
  return (
    <>
      <Row className={btnIconRowClassName}>
        <Col xs={buttonXs} md={buttonMd || 14}>
          {!!btnIcon && (
            <Avatar
              shape={iconBtnShape}
              className={iconBtnClassName}
              icon={btnIcon}
              src={btnIcon}
              size={btnSize}></Avatar>
          )}
          {!!fieldName && (
            <AppTitle className={fieldNameClassName} title={fieldName} Variant="span" />
          )}
        </Col>
        <Col xs={offsetXs} md={offsetMd || 2}></Col>
        <Col xs={mainBtnXs} md={mainBtnMd || 8} className={`text-end ${mainBtnColClassName}`}>
          {!!mainBtnText && (
            <Button
              className={`${mainBtnClassName}`}
              onClick={(e: any) => mainBtnFunction?.(e)}
              size={mainBtnSize}
              ghost={mainBtnGhost}
              type={mainBtnType}>
              <AppTitle title={mainBtnText} />
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
};
