import { useParams } from 'react-router-dom'
import { BlockReportCardIssue } from './block-report-card-issue';
import { ReplaceReportCardIssue } from './replace-report-card-issue'

export const ReportCardIssue = () => {
  const { issueType } = useParams();
 return<>
 {issueType ==='replace' && <ReplaceReportCardIssue/>}
 {issueType ==='block' && <BlockReportCardIssue/>}
 </>
}
