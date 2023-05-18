import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { REPORTISSUEDATA } from './report-issue-data'
import { useAppLayout } from '../../../hooks/use-app-layout';
import {REPORTCARDISSUEIMAGES} from "./report-card-issue-images"
import { AppModal } from '../../../components/modals/app-modal/app-modal';
import { ReportIssueTemplate } from '../../../templates/report-issue/report-issue'
import { AppCardWhite } from '../../../components/cards/app-card-white/app-card-white'
import { RequestSubmitTemplate } from '../../../templates/request-submit/request-submit'
import { AppVerifyOtpInputModal } from '../../../components/modals/app-verify-otp-modal/app-verify-otp-modal';

export const BlockReportCardIssue = () => {
    const { bannerHeading, pageName } = useAppLayout();
    useEffect(() => {
      bannerHeading("Cancel an Existing Card");
      pageName("Cards")
    }, [bannerHeading, pageName]);

    const navigate = useNavigate()
    const [value, setValue] = useState('Lost a card')
    const [showModal, setShowModal] = useState(false)
    const [showSubmit, setShowSubmit] = useState(false)
    const [showOtp, setShowOtp] = useState(false);
    const [ setShowIncreaseLimitForm ] = useState('SetIncreaseLimitTemplate')
    const requestSubmitButtons = REPORTISSUEDATA.submitButtonFunction(navigate, setShowSubmit)
    const onConfirmAdd = (e: any) => {
        setShowOtp(true)
        setShowModal(false)
    };

    return (
        <AppCardWhite cardClassName="p-5 sm:p-14">
            {!showSubmit && <ReportIssueTemplate
                ReportIssueArray={REPORTISSUEDATA.blockCardIssueArray}
                btnChildren="Continue"
                btnType="primary"
                value={value}
                btnFunction={() => setShowModal(true)}
                onChange={(e: any) => setValue(e.target.value)}
            />}

            {showSubmit &&
                <RequestSubmitTemplate
                    setShowIncreaseLimitForm={setShowIncreaseLimitForm}
                    variantOne="span"
                    variantTwo="span"
                    avatarSize="large"
                    titleTwo=" Submitted"
                    buttons={requestSubmitButtons}
                    titleOne="Your request has been"
                    imgSrc={REPORTCARDISSUEIMAGES.checkMark}
                    RequestSubmitImageClass="sm:w-12"
                    // ImgWidth={60}
                    btnClassName="w-full"
                    discription="It will be reviewed and processed within 24 hours. You will be notified immediately. In case of any errors, one of our team member will be in touch to proceed with your application."
                />
            }
            {showModal && (
                <AppModal
                    isModalOpen={showModal}
                    handleOk={() => setShowModal?.(false)}
                    handleCancel={() => setShowModal?.(false)}
                    submitBtnFunction={(e: any) => onConfirmAdd?.(e)}
                    heading="Cancelling a card will permanently disables authorization processing & destroys the card.
                    This process is irreversible."
                    avatarClassName="text-5xl"
                    headingClassName="my-3"
                    avatarSize={70}
                    src={REPORTCARDISSUEIMAGES.alertIcon}
                    firstButtonText="Continue"
                    secondButtonText="Cancel"
                />
            )}
            {showOtp && (
                <AppVerifyOtpInputModal
                    isModalOpen={showOtp}
                    handleOk={() => setShowOtp?.(false)}
                    handleCancel={() => setShowOtp?.(false)}
                    sendOTP={() => { setShowOtp(false); setShowModal(false); setShowSubmit(true) }}
                />
            )}

        </AppCardWhite>
    )
}
