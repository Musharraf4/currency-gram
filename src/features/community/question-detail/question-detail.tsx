import { useState } from "react";
import { QuestionsReply } from "../../../templates/questions-reply/questions-reply";
import { questionDetail } from "./question-detail-data";
import { iconButtonFunction } from "../topic-questions/topics-questions-data";

export const QuestionDetail = () => {
  const [answer, setAnswer] = useState("");
  const iconButton = iconButtonFunction();

  console.log({ answer });
  return (
    <div className="p-4">
      <QuestionsReply
        placeholder="Write an answer"
        userImage={questionDetail.userImage}
        posterName={questionDetail.posterName}
        time={questionDetail.time}
        question={questionDetail.question}
        description={questionDetail.description}
        replies={questionDetail?.replies}
        onChange={(e: any) => setAnswer(e?.target?.value)}
        iconButton={iconButton}
      />
    </div>
  );
};
