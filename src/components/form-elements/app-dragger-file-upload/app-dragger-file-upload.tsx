import { Upload, UploadProps } from "antd";
import { AppTitle } from "../../data-display/app-title/app-title";
import { MAXUPLOADCSVFILESIZE } from "../../../constants/validations-constant";
import { processCSV } from "../../../utils/file-utils";
import { validateFile } from "../../../utils/validations-utils";
import { useAppAlert } from "../../feedback/app-alert/use-app-alert";
import { AppCardWhite } from "../../cards/app-card-white/app-card-white";
import { ICONSCONSTANT } from "../../../constants/icons-constant";

export const DraggerFileUpload = (props: any) => {
  const {
    setCsvData,
    fileUploadSuccess,
    setFileUploadSuccess,
    fileInfo,
    setFileInfo,
    setCsvErrorData,
  } = props;

  const { Dragger } = Upload;

  const { openAlert } = useAppAlert();

  const dummyRequest = async ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  const onChange = (info: any) => {
    setFileUploadSuccess(false);
    setFileInfo("");
    const { status } = info.file;
    if (status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (status === "done") {
      openAlert(`${info.file.name} file uploaded successfully.`, "success");
      setFileUploadSuccess(true);
      setFileInfo(info.file.name);
      // console.log(typeof info.file.originFileObj);
      const file = info.file.originFileObj;
      const reader = new FileReader();

      reader.onload = function (e: any) {
        // console.log(e);
        const text = e?.target?.result;
        // console.log(text);
        const re = processCSV(text); // plugged in here
        // console.log(re);
        const errorData = re.filter(
          (x: any) =>
            !!!x?.["First name"] ||
            !!!x?.["Last name"] ||
            !!!x?.["Nick name"] ||
            x?.["Sort code"]?.length !== 6 ||
            x?.["Account no"]?.length !== 8
        );
        // console.log({ errorData });

        setCsvErrorData(errorData);
        setCsvData(re);
      };

      reader.readAsText(file);
    } else if (status === "error") {
      openAlert(`${info.file.name} file upload failed.`, "error");
    }
  };
  const onDrop = (e: any) => {
    console.log("Dropped files", e.dataTransfer.files);
  };
  const draggerprops: UploadProps = {
    name: "file",
    //   multiple: true,
    // className: "border-0",
    customRequest: dummyRequest,
    showUploadList: false,
    accept: "text/csv",
    beforeUpload: (file) =>
      validateFile?.(file, ["text/csv", "image/jpeg"], MAXUPLOADCSVFILESIZE, openAlert),
    onChange: (file) => onChange?.(file),
    onDrop: (file) => onDrop?.(file),
  };

  return (
    <>
      <AppCardWhite
        cardClassName={`${fileUploadSuccess && "border-success border-2 border-solid"}`}
      >
        <Dragger {...draggerprops}>
          <div className="ant-upload-drag-icon pt-2 pb-2 mt-3">
            {!fileUploadSuccess ? (
              <ICONSCONSTANT.FileAddOutlined className="text-3xl" />
            ) : (
              <ICONSCONSTANT.CheckCircleFilled className="text-3xl text-success" />
            )}
          </div>
          <div className="ant-upload-text mb-3">
            <AppTitle
              Variant="span"
              title={!fileUploadSuccess ? "Drag and drop file here or" : `${fileInfo} uploaded `}
              className={`text-primary-text font-semibold ${fileUploadSuccess && "text-success"}`}
            />{" "}
            <AppTitle
              Variant="span"
              title={!fileUploadSuccess ? "choose file" : `or upload another file `}
              className={`text-primary font-semibold underline ${
                fileUploadSuccess && "text-primary-text"
              }`}
            />
          </div>
        </Dragger>
      </AppCardWhite>
    </>
  );
};
