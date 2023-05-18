import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppAlert } from "../../../components/feedback/app-alert/use-app-alert";
import { useAppLayout } from "../../../hooks/use-app-layout";

const useTeamMemberDetail = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { bannerHeading, pageName } = useAppLayout();

  const param = useParams();

  const { openAlert } = useAppAlert();
  const navigate = useNavigate();

  useEffect(() => {
    bannerHeading("Profile");
    pageName("Team Management")
  }, []);

  const onConfirmDelete = (e: any) => {
    // console.log(e);
    setIsDeleting(false);
    openAlert("Record Deleted", "error");
  };
  return { isDeleting, setIsDeleting, openAlert, navigate, onConfirmDelete, param };
};

export default useTeamMemberDetail;
