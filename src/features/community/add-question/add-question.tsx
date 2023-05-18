import { AppAddQuestionModal } from "../../../components/modals/app-add-question-modal/app-add-question-modal";
import { clearIsQuestionModalOpen } from "../../../store/layout/layout-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { addQuestionCommunityFunction } from "./add-question-data";

export const AddQuestion = () => {
  const addQuestionCommunity = addQuestionCommunityFunction();
  const { layout } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  console.log(layout?.isQuestionModalOpen);
  const setModalClose = () => {
    dispatch(clearIsQuestionModalOpen());
  };
  return (
    <>
      <AppAddQuestionModal
        formFields={addQuestionCommunity}
        isModalOpen={layout?.isQuestionModalOpen}
        handleCancel={() => setModalClose?.()}
        handleOk={() => setModalClose?.()}
        mainTitle="Ask a Question"
        firstButtonText="Post"
      />
    </>
  );
};
