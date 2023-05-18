import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ICONSCONSTANT } from "../../../constants/icons-constant";
import { CARDSETTINGIMAGES } from "./card-settings-images";
import { CARDSETTINGSDATA } from './card-settings-data'
import { AppCountriesModal } from "../../../components/modals/app-countries-modal/app-countries-modal";
import { AppCongratulationModal } from '../../../components/modals/app-congratulation-modal/app-congratulation-modal';
import { BusinessCardSettingsTemplate } from '../../../templates/business-physical-card-setting-template/business-physical-card-setting-template';

export const BusinessCardSettings = (props: any) => {
    const navigate = useNavigate()
    const [isCountry, setIsCountry] = useState(false);
    const [isCurrieries, setIsCurrieries] = useState(false);
    const { title, className, buttons, showSuccessModal, setShowSuccessModal, submitBtnFunction, modalSubHeading } = props;
    const businessPhysicalCardSettingData = CARDSETTINGSDATA.businessPhysicalCardSettingArray(navigate, setIsCountry, setIsCurrieries,)

    return (
        <>
            <BusinessCardSettingsTemplate
                title={title}
                discription="Select countries, categories or currencies in which spend will be permitted"
                PhysicalCardSettingArray={businessPhysicalCardSettingData}
                buttons={buttons}
                className={className}
            />
            {showSuccessModal && <AppCongratulationModal
                modalWidth="w-full"
                isModalOpen={showSuccessModal}
                handleCancel={() => setShowSuccessModal?.(false)}
                heading="Congratulations"
                // handleOk={() => setIsAdded?.(false)}
                submitBtnFunction={submitBtnFunction}
                headingClassName="my-3 font-bold text-3xl"
                subHeading={modalSubHeading}
                subHeadingClassName="w-full max-w-xs mx-auto"
                avatarClassName="text-5xl"
                avatarSize={70}
                src={CARDSETTINGIMAGES.congrats}
                submitBtnClassName="w-48"
                firstButtonText="Go to Cards"
            />}

            {isCountry && <AppCountriesModal
                isModalOpen={isCountry}
                onChangeCountry={setIsCountry}
                handleOk={() => setIsCountry(false)}
                handleCancel={() => setIsCountry(false)}
                submitBtnFunction={() => setIsCountry?.(false)}
                heading="Beneficiary Added Successfully"
                description="Manage countries where card spend allowed"
                avatarClassName="text-5xl"
                avatarSize={70}
                src={<ICONSCONSTANT.CheckCircleFilled className="text-success text-5xl" />}
                firstButtonText="Save"
                prefix={<ICONSCONSTANT.SearchOutlined />}
                placeholder="Search"
                countryName="Pakistan"
                modalHeading="Countries"
                selectSwtich="Select all"
                countryArray={CARDSETTINGSDATA.countryArray}
            />}
            {isCurrieries && <AppCountriesModal
                isModalOpen={isCurrieries}
                onChangeCountry={setIsCurrieries}
                handleOk={() => setIsCurrieries(false)}
                handleCancel={() => setIsCurrieries(false)}
                submitBtnFunction={() => setIsCurrieries?.(false)}
                heading="Accepted Currencies"
                description="Manage countries where card spend allowed"
                avatarClassName="text-5xl"
                avatarSize={70}
                src={<ICONSCONSTANT.CheckCircleFilled className="text-success text-5xl" />}
                firstButtonText="Save"
                prefix={<ICONSCONSTANT.SearchOutlined />}
                placeholder="Search"
                countryName="Pakistan"
                modalHeading="Linked 2"
                selectSwtich="Link all"
                countryArray={CARDSETTINGSDATA.currieriesArray}
            />
            }

        </>
    )
}