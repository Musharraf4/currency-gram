import { iconButtonFunction, questionsDataFunction, selectItems } from "../topic-questions/topics-questions-data";
import { PersonalDetailsViewCommunity } from "../../auth-user/personal-detail-view/personal-details-view-community";
import { AddQuestion } from "../add-question/add-question";
import { PostScreen } from "../../../templates/post-screen/post-screen";
import { useState } from "react";
import status from "../../../assets/icons/status.svg";
export const MyQuestions = () => {
  const [selected, setSelected] = useState("All Topics");
  const items = selectItems(setSelected);
  const iconButton = iconButtonFunction();
  const questionsData = questionsDataFunction();
  return (
    <>
      <div className="p-5">
        <PostScreen
          questionsData={questionsData}
          mainTitle="# My Questions"
          items={items}
          title={selected}
          imgSrc={status}
          iconButton={iconButton}
        />
      </div>
      <PersonalDetailsViewCommunity />
      <AddQuestion />
    </>
  );
};
