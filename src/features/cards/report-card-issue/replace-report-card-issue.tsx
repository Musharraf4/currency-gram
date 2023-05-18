import { useEffect, useState } from 'react'
import { REPORTISSUEDATA } from './report-issue-data';
import { useAppLayout } from '../../../hooks/use-app-layout';
import { ConfirmDeliveryAddress } from './replace-confirm-delivery-address';
import { ReportIssueTemplate } from '../../../templates/report-issue/report-issue';
import { AppCardWhite } from '../../../components/cards/app-card-white/app-card-white';

export const ReplaceReportCardIssue = () => {
  const { bannerHeading, pageName } = useAppLayout();
  useEffect(() => {
    bannerHeading("Report an Issue");
    pageName("Cards")
  }, [bannerHeading, pageName]);
  const [value, setValue] = useState('Lost a card')
  const [showDeliveryForm, setShowDeliveryForm] = useState(false)

  return (
    <>
      <AppCardWhite cardClassName="p-5 sm:p-14 -mt-16">
        {!showDeliveryForm && <ReportIssueTemplate
          ReportIssueArray={REPORTISSUEDATA.replaceCardIssueArray}
          btnChildren="Continue"
          btnType="primary"
          value={value}
          btnFunction={() => setShowDeliveryForm(true)}
          onChange={(e: any) => setValue(e.target.value)}
        />}

        {showDeliveryForm && <ConfirmDeliveryAddress />}

      </AppCardWhite>
    </>
  )
}
