import { useState } from "react";
import { Row, Col } from "antd";
import { RequestedChanges } from "./requested-changes";
import { IncreaseLimitForm } from "./increase-limit-form";
import { useNavigate, useParams } from 'react-router-dom';
import { INRCREASELIMITDATA } from './increase-limit-data';
import {INCREASELIMITIMAGES} from "./increase-limit-images";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { RequestSubmitTemplate } from "../../../templates/request-submit/request-submit";
import { SetIncreaseLimitTemplate } from '../../../templates/app-set-increase-limit/app-set-increase-limit'

export const IncreaseLimit = () => {
  const navigate = useNavigate()
  const { cardType } = useParams()
  const increaseLimitButtons = INRCREASELIMITDATA.increaseLimitButtonFunction();
  const requestSubmitButtons = INRCREASELIMITDATA.requestSubmitButtonFunction(navigate, cardType)
  const [showIncreaseLimitForm, setShowIncreaseLimitForm] = useState('SetIncreaseLimitTemplate')

  return (
    <AppCardWhite cardClassName="p-14 mt-8">
      <Row className="flex justify-center">
        <Col xs={24} sm={24} md={24} lg={10}>

          {showIncreaseLimitForm === 'SetIncreaseLimitTemplate' &&

            <SetIncreaseLimitTemplate
              avatarSize="large"
              buttons={increaseLimitButtons}
              increaseLimitTitle="Increase Limit"
              increaseLimitSrc={INCREASELIMITIMAGES.inreaseLimit}
              increaseLimitBtnChildren="Continue"   
              increaseLimitBtnType="primary"
              increaseLimitBtnFunction={() => setShowIncreaseLimitForm('IncreaseLimitForm')}
              increaseLimitDescription="It will be reviewed and processed within 24 hours. You will be notified immediately. In case of any errors, one of our team member will be in touch to proceed with your application."
            />

          }

          {showIncreaseLimitForm === 'IncreaseLimitForm' && <IncreaseLimitForm setShowIncreaseLimitForm={setShowIncreaseLimitForm} />}
          {showIncreaseLimitForm === 'RequestedChanges' && <RequestedChanges setShowIncreaseLimitForm={setShowIncreaseLimitForm} />}
          {showIncreaseLimitForm === 'RequestSubmitTemplate' &&
            <RequestSubmitTemplate
              setShowIncreaseLimitForm={setShowIncreaseLimitForm}
              variantOne="span"
              variantTwo="span"
              avatarSize="large"
              titleTwo=" Submitted"
              buttons={requestSubmitButtons}
              titleOne="Your request has been"
              imgSrc={INCREASELIMITIMAGES.checkMark}
              RequestSubmitImageClass="sm:w-12"
              discription="It will be reviewed and processed within 24 hours. You will be notified immediately. In case of any errors, one of our team member will be in touch to proceed with your application."
            />
            }

        </Col>

      </Row>
    </AppCardWhite>
  )
}
