import { AppProfileModal } from "../../../components/modals/app-profile-modal/app-profile-modal";
import { clearIsProfileModalOpen } from "../../../store/layout/layout-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { usePersonalDetailsView } from "./use-personal-details-view";

export const PersonalDetailsViewCommunity = (props: any) => {
  const {} = props;
  const { personalDetailsCommunity, personalDetailCommunityButton } = usePersonalDetailsView();
  const { layout } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const setModalClose = () => {
    dispatch(clearIsProfileModalOpen());
  };
  return (
    <>
      {layout.isProfileModalOpen && (
        <AppProfileModal
          formFields={personalDetailsCommunity}
          isModalOpen={layout.isProfileModalOpen}
          button={personalDetailCommunityButton}
          handleCancel={() => setModalClose?.()}
          handleOk={() => setModalClose?.()}
        />
      )}
    </>
  );
};
