import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAxiosInterceptors } from "../../hooks/use-axios-interceptors";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  addQuestionButtonFunction,
  CommunitySideBarNavDataFunction,
  contributorsFunction,
  contributorsList,
  detailAbouttopicFunction,
  dynamicData,
  questionsRelate,
  relatedQuestionsFunction,
  relatedTopicsFunction,
} from "./sidebar-data";

export const useSidebar = () => {
  const { openDrawer } = useAppSelector((state) => state.layout);
  const { auth } = useAppSelector((state) => state);
  // const { layout } = useAppSelector((state) => state);
  const contributorsLists = contributorsList;
  const dynamicDatas = dynamicData;
  const dispatch = useAppDispatch();
  // const axiosInstance = useAxiosInterceptors();
  const CommunitySideBarNavData = CommunitySideBarNavDataFunction();
  // const { personalUser } = useAppSelector((state) => state);
  const addQuestionButton = addQuestionButtonFunction(dispatch);
  const detailAbouttopic = detailAbouttopicFunction();
  const [isViewAll, setIsViewAll] = useState(false);
  const [modalData, setModalData] = useState<any>("");
  const onSetModalData = (data: any) => {
    setModalData(data);
    setIsViewAll(true);
  };
  const navigate = useNavigate();
  const relatedQuestions = relatedQuestionsFunction(questionsRelate, navigate);
  const contributors = contributorsFunction(contributorsLists, onSetModalData);
  const relatedTopics = relatedTopicsFunction(dynamicDatas, onSetModalData);
  return {
    openDrawer,
    dispatch,
    navigate,
    auth,
    CommunitySideBarNavData,
    addQuestionButton,
    contributors,
    relatedTopics,
    detailAbouttopic,
    isViewAll,
    setIsViewAll,
    modalData,
    relatedQuestions,
  };
};
