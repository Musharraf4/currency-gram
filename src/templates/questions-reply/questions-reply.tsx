import { AppCommentInput } from "../../components/form-elements/app-comment-input/app-comment-input";
import { AppQuestionBox } from "../../components/data-display/app-questions-box/app-question-box";
import { AppReplyBox } from "../../components/data-display/app-reply-box/app-reply-box";

export const QuestionsReply = (props: any) => {
  const {
    userImage,
    posterName,
    time,
    question,
    description,
    placeholder,
    replies,
    value,
    onChange,
    iconButton,
  } = props;
  return (
    <>
      <AppQuestionBox
        posterimage={userImage}
        postername={posterName}
        postedDate={time}
        questionsTitle={question}
        questionsdescription={description}
        showAnswers={false}
        iconButton={iconButton}
      />
      <div className="border-solid border-light-grey border-[.5px] p-2 mt-4 rounded-t-lg">
        <AppCommentInput
          placeholder={placeholder}
          value={value}
          // onClickReply={(e: any) => onClickReply?.(e)}
          onChange={(e: any) => onChange?.(e)}
        />
      </div>
      <div className="border-solid border-light-grey border-[.5px] p-2 rounded-b-lg">
        {!!replies?.length &&
          replies?.map((singleReply: any) => (
            <AppReplyBox
              replierName={singleReply?.name}
              replyTime={singleReply?.time}
              imgSrc={singleReply?.userImage}
              answer={singleReply?.answer}
            />
          ))}
      </div>
    </>
  );
};
