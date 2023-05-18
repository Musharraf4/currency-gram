import { useNavigate, useParams } from "react-router-dom";
import {
  addQuestionButtonFunction,
  iconButtonFunction,
  questionsDataFunction,
  selectItems,
} from "./topics-questions-data";
import status from "../../../assets/icons/status.svg";
import { useState } from "react";
import { PostScreen } from "../../../templates/post-screen/post-screen";
import { PersonalDetailsViewCommunity } from "../../auth-user/personal-detail-view/personal-details-view-community";
import { AddQuestion } from "../add-question/add-question";
import { useAppDispatch } from "../../../store/store";

export const TopicQuestions = () => {
  const { topics } = useParams();
  const [selected, setSelected] = useState("All Topics");
  const items = selectItems(setSelected);
  const dispatch = useAppDispatch();
  const addQuestionButton = addQuestionButtonFunction(dispatch);
  const iconButton = iconButtonFunction();
  const navigate = useNavigate();
  const questionsData = questionsDataFunction(navigate);
  console.log(items);
  return (
    <>
      <div className="p-5">
        <PostScreen
          questionsData={questionsData}
          mainTitle={`$ ${topics?.replaceAll("-", " ")}`}
          items={items}
          title={selected}
          imgSrc={status}
          buttons={addQuestionButton}
        />
      </div>
      <PersonalDetailsViewCommunity />
      <AddQuestion />
    </>
  );
};
