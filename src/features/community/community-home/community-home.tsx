import {
  addQuestionButtonFunction,
  iconButtonFunction,
  questionsDataFunction,
  selectItems,
} from "../topic-questions/topics-questions-data";
import { PersonalDetailsViewCommunity } from "../../auth-user/personal-detail-view/personal-details-view-community";
import { AddQuestion } from "../add-question/add-question";
import { PostScreen } from "../../../templates/post-screen/post-screen";
import { useState } from "react";
import status from "../../../assets/icons/status.svg";
import { useAppDispatch } from "../../../store/store";
export const CommunityHome = () => {
  const [selected, setSelected] = useState("All Topics");
  const items = selectItems(setSelected);
  const dispatch = useAppDispatch();
  const addQuestionButton = addQuestionButtonFunction(dispatch);
  const iconButton = iconButtonFunction();
  const questionsData = questionsDataFunction();
  return (
    <>
      <div className="p-5">
        <PostScreen
          questionsData={questionsData}
          mainTitle="# General"
          items={items}
          title={selected}
          imgSrc={status}
          buttons={addQuestionButton}
          iconButton={iconButton}
        />
      </div>
      <PersonalDetailsViewCommunity />
      <AddQuestion />
    </>
  );
};
