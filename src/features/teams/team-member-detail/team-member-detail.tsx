import { AppModal } from "../../../components/modals/app-modal/app-modal";
import wasted from "../../../assets/icons/delete.svg";
import { roleDataFunction } from "./team-member-detail-data";
import useTeamMemberDetail from "./use-team-member-detail";
import {UserRoleCardTemplate} from "../../../templates/user-role-card/user-role-card";

export const TeamMemberDetail = () => {
  const { isDeleting, setIsDeleting, openAlert, navigate, onConfirmDelete, param } =
    useTeamMemberDetail();

  const roleData = roleDataFunction({ navigate, param, setIsDeleting });

  return (
    <div>
      <UserRoleCardTemplate
        size={52}
        avatarChildren="US"
        heading="Usman Saeed"
        description="usman.saeed@ceative.co.uk"
        tabCardData={roleData}
      />

      {isDeleting && (
        <AppModal
          isModalOpen={isDeleting}
          handleOk={() => setIsDeleting?.(false)}
          handleCancel={() => setIsDeleting?.(false)}
          submitBtnFunction={(e: any) => onConfirmDelete?.(e)}
          cancelBtnFunction={() => {
            setIsDeleting?.(false);
          }}
          heading="Are you sure you want to delete this record"
          avatarClassName="text-2xl bg-danger p-4"
          avatarSize={60}
          headingClassName="my-3"
          src={wasted}
          firstButtonText="Yes"
          secondButtonText="No"
        />
      )}
    </div>
  );
};