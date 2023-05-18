import { NoItemCreated } from "../../components/no-item-created/no-item-created";

export const CommonPageTemplate = (props: any) => {
  const { button, title, imgSrc } = props;
  return <NoItemCreated title={title} button={button} src={imgSrc} />;
};
