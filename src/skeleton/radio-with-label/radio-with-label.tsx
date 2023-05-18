import { Col, Radio, Row } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const RadioWithLabelSkeleton = (props: any) => {
  const {
    radioLabel,
    radioData,
    radioColClassName,
    radioLabelXs,
    radioLabelMd,
    radioMd,
    radioXs,
    radioRowClassName,
    radioLabelClassName,
    radioClassName,
  } = props;
  console.log(props);
  return (
    <>
      {radioData?.length &&
        radioData?.map?.((radio: any) => (
          <Row className={radioRowClassName} key={radio?.value}>
            <Col xs={radioLabelXs || 19} md={radioLabelMd} className={radioLabelClassName}>
              {!!radio?.radioLabel && (
                <AppTitle className={radioLabelClassName} title={radio?.radioLabel} />
              )}
            </Col>
            <Col xs={radioXs || 5} md={radioMd} className={`text-end ${radioColClassName}`}>
              <Radio value={radio?.value} className={radioClassName}></Radio>
            </Col>
          </Row>
        ))}
    </>
  );
};
