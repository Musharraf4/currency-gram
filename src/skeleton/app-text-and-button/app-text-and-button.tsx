import { Button, Col, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const AppTextAndButton = (props: any) => {
  const {
    textAndButtonTitle,
    textAndButtonTitleClassName,
    textAndButtonVariant,
    btnClassName,
    textAndButtonSize,
    textAndButtontype,
    textAndButtonText,
    textAndButtonClass,
    btnIcon,
    btnLink,
    textAndButtonfirstCol,
    textAndButtonsecondCol,
  } = props;
  return (
    <>
      <Row className={textAndButtonClass}>
        <Col xs={24} sm={12} md={12} lg={12} className={textAndButtonfirstCol}>
          <AppTitle
            title={textAndButtonTitle}
            Variant={textAndButtonVariant}
            className={textAndButtonTitleClassName}
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} className={textAndButtonsecondCol}>
          <Button
            icon={btnIcon}
            type={textAndButtontype}
            size={textAndButtonSize}
            children={textAndButtonText}
            className={btnClassName}
            onClick={() => btnLink?.()}
          />
        </Col>
      </Row >
    </>
  );
};
