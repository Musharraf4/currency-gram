import { Col, Row } from "antd";
import { TabCard } from "../tab-card/tab-card";
import { MainCard } from "../main-card/main-card";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppCreditCard } from "../../components/cards/app-credit-card/app-credit-card";
import { cardSettingCardFunction } from "../../features/cards/card-settings/card-settings-data";

export const CardSettingsTemplate = (props: any) => {
  const { cardSettingArray, setIsActive, isActive, buttonsData, showCard, creditCardUser, creditCardUserExpDate, creditCardUserNumber, primaryCardData, isFreeze, setIsFreeze , hideText, creditCardSrc} = props;
  const cardSettingCard = cardSettingCardFunction(setIsActive);

  return (
    <>
      <MainCard
        primaryCardData={cardSettingCard}
        mainDivClassName="pt-8 pl-4 pr-4"
        activeCard={isActive}
      />
      <AppCardWhite cardClassName="pt-10 mt-8">
        <AppCreditCard
          buttons={buttonsData}
          btnMainDivClassName="flex justify-evenly flex-wrap w-56 sm:w-96 mx-auto"
          creditCardImageClass="w-full"
          creditCardUserClassName="absolute text-[10px] bottom-12 left-5 sm:text-sm sm:bottom-20 sm:left-8"
          creditCardUserDateClassName="absolute text-[10px] bottom-12 left-28 sm:text-sm sm:bottom-20 sm:right-20"
          creditCardUserAccountNumberClass="absolute left-5 text-[10px] bottom-8 sm:text-sm sm:bottom-14 sm:left-8"
          creditCardMainImagelClass="w-56 sm:w-96 mx-auto relative text-white "
          creditCardMainDetailClass="text-center mx-auto"
          creditCardUser={creditCardUser}
          creditCardUserExpDate={creditCardUserExpDate}
          creditCardUserNumber={creditCardUserNumber}
          creditCardSrc={creditCardSrc}
          isFreeze={isFreeze}
          setIsFreeze={setIsFreeze}
          hideText={hideText}
        />
        <div className="mt-5">
          {showCard &&
            <MainCard primaryCardData={primaryCardData} mainDivClassName="shadow-none pt-8 pl-4 pr-4" activeCard={isActive} />
          }
        </div>
        <Row gutter={[32, 32]} className="p-5 sm:p-14 mt-10">
          {!showCard && cardSettingArray?.map((item: any) => (
            <Col xs={24} md={12} lg={8}>
              <TabCard
                key={item.id}
                tabCradClassName={item.className}
                tabCardIcon={item?.ThirdColIcon}
                tabCardHeading={item?.tabCardHeading}
                tabIconUserImage={item?.tabIconUserImage}
                onCardClick={item?.linkPath}
              />
            </Col>
          ))}
        </Row>

      </AppCardWhite>
    </>
  );
};

