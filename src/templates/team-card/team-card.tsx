import { Button, Checkbox } from "antd";
import { ICONSCONSTANT } from "../../constants/icons-constant";
import { AppCardWhite } from "../../components/cards/app-card-white/app-card-white";
import { AppTextAndButton } from "../../skeleton/app-text-and-button/app-text-and-button";

export const TeamCardTemplate = (props: any) => {
  const { btnLink, textAndButtonText, textAndButtonTitle, btnIcon, teamCardArray, btnText } = props;
  return (
    <>
      <AppCardWhite cardClassName="p-5 sm:px-14 py-16">
        <AppTextAndButton
          btnIcon={btnIcon}
          btnLink={btnLink}
          textAndButtonClass="mb-8"
          btnClassName="border-0 mt-3 sm:mt-0"
          textAndButtonText={textAndButtonText}
          textAndButtonTitle={textAndButtonTitle}
          textAndButtonTitleClassName="text-xl font-bold"
          textAndButtonfirstCol="sm:text-left text-center"
          textAndButtonsecondCol="sm:text-right text-center"
        />
        <div className="w-full overflow-x-auto">
          {teamCardArray.map((card: any) => (
            <div className="flex items-center bg-stone-50 px-4 mb-3 mx-auto rounded-xl w-[576px] sm:w-full md:w-full lg:w-full sm:overflow-x-visible">
              <div>
                <Checkbox />
              </div>
              <div onClick={card?.linkPath} className='flex items-center justify-between cursor-pointer w-full h-14'>
                <span>
                  <span className="text-base font-medium mx-5">{card.name}</span>
                  <span>{card.physical}</span>
                  <span>{card.virtual}</span>
                </span>
                <div className="flex items-center">
                  <div>
                    {card.admin} <ICONSCONSTANT.RightOutlined />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-end mt-6">
          <Button type="primary" className="pt-2 pb-7">
            {btnText}
          </Button>
        </div>
      </AppCardWhite>
    </>
  );
};
