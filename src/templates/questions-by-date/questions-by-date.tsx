import { Divider } from "antd";
import { AppQuestionBox } from "../../components/data-display/app-questions-box/app-question-box";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const QuestionsByDate = (props: any) => {
  const { date, questionData } = props;
  return (
    <>
      {!!date && (
        <Divider>
          <AppTitle
            title={date}
            className="text-secondary-text font-medium text-sm bg-alice-blue-background rounded-full px-4 py-2"
          />
        </Divider>
      )}
      {!!questionData?.length &&
        questionData?.map((single: any, index: any) => (
          <>
            <AppQuestionBox
              posterimage={single?.userImage}
              postername={single?.posterName}
              postedDate={single?.time}
              questionsTitle={single?.question}
              questionsdescription={single?.description}
              iconButton={single?.iconButton}
              onClickAnswer={single?.onClickAnswer}
            />
            {index !== questionData?.length - 1 && <Divider></Divider>}
          </>
        ))}
    </>
  );
};
