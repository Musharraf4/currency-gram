import { LIMITVIEWDATA } from "./limit-view-data"
import { LimitCardViewTemplate } from "../../../templates/limit-card-view/limit-card-view"

export const PersonalCardLimitView = () => {
    return (
        <>
            <LimitCardViewTemplate
                LimitCardViewTemplateArray={LIMITVIEWDATA.personalCardLimitViewArray}
                btnChildren="Edit" btnType="primary" xs={24} md={5} lg={12}
            />
        </>
    )
}