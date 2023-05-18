import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const AppReactQuill = (props: any) => {
  const { value, setValue } = props;

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
};
