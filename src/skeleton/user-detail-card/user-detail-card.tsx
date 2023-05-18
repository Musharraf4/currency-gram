import { Avatar, Col, Row, Switch } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const UserDetailCard = (props: any) => {
  const {
    heading,
    description,
    userImage,
    userImageClassName,
    descriptionClassName,
    headingClassName,
    userDetailsClassName,
    userInfoClassName,
    imageDivClassName,
    children,
    avatarStyle,
    icon,
    size,
    defaultChecked,
    classNameSwitch,
    unCheckedChildren,
    sizeSwitch,
    loading,
    onClick,
    onChange,
    disabled,
    showSwitch,
    onCardClick,
    userPrice,
    userPriceClassName,
    Variant,
    ThirdColIcon,
    showIcon,
    col1Xs,
    col1Md,
    col1Sm,
    col2Sm,
    col3Sm,
    col2Xs,
    col2Md,
    col3Xs,
    col3Md,
    col1Lg,
    col2Lg,
    col3Lg,
    col1Xl,
    col2Xl,
    col3Xl,
    subtitleClassName,
    subtitle,
    avatarChildren,
    shape,
    checked,
    switchColClassName,
    onHeadingClick,
  } = props;

  // console.log(props);

  return (
    <>
      <Row className={`${userDetailsClassName}`} onClick={(e: any) => onCardClick?.(e)}>
        <Col
          xs={col1Xs}
          sm={col1Sm}
          md={col1Md}
          lg={col1Lg}
          xl={col1Xl}
          className={`${imageDivClassName}`}
        >
          <Avatar
            src={userImage}
            alt={heading}
            icon={icon}
            size={size}
            shape={shape}
            className={`${userImageClassName}`}
            style={avatarStyle}
          >
            {avatarChildren}
            {/* {name?.slice(0,1)?.toUpperCase()} */}
          </Avatar>
        </Col>
        <Col
          xs={col2Xs}
          sm={col2Sm}
          md={col2Md}
          lg={col2Lg}
          xl={col2Xl}
          className={`${userInfoClassName}`}
        >
          <AppTitle
            className={headingClassName}
            title={heading}
            onClick={(e: any) => onHeadingClick?.(e)}
          />
          {!!description && <AppTitle className={descriptionClassName} title={description} />}
          {!!subtitle && <AppTitle className={subtitleClassName} title={subtitle} />}
        </Col>
        <Col
          xs={col3Xs}
          sm={col3Sm}
          md={col3Md}
          lg={col3Lg}
          xl={col3Xl}
          className={switchColClassName}
        >
          {showSwitch && (
            <Switch
              size={sizeSwitch}
              loading={loading}
              checked={checked}
              onChange={(e: any) => onChange?.(e)}
              onClick={(e: any) => onClick?.(e)}
              disabled={disabled}
              className={classNameSwitch}
              defaultChecked={defaultChecked}
              unCheckedChildren={unCheckedChildren}
            />
          )}
          {showIcon && ThirdColIcon}
          {!!userPrice && (
            <AppTitle Variant={Variant} title={userPrice} className={userPriceClassName} />
          )}
        </Col>
      </Row>
    </>
  );
};
