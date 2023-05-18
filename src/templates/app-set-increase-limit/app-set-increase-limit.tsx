import { Button, Image } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";

export const SetIncreaseLimitTemplate = (props: any) => {
  const {
    increaseLimitDescription,
    increaseLimitBtnType,
    increaseLimitTitle,
    increaseLimitSrc,
    increaseLimitBtnChildren,
    increaseLimitTitletwo,
    increaseLimitTitletwoClassName,
    increaseLimitTitletwoVariant,
    increaseLimitBtnFunction,
  } = props;

  return (

    <div className="text-center">
      <AppTitle title={increaseLimitTitle} className="text-2xl font-bold" />
      <div>
        <Image src={increaseLimitSrc} className="mt-6" preview={false} />
      </div>
      <div>
        <AppTitle
          Variant={increaseLimitTitletwoVariant}
          title={increaseLimitTitletwo}
          className={increaseLimitTitletwoClassName}
        />
      </div>
      <AppTitle title={increaseLimitDescription} className="my-7 leading-6" />
      <Button
        className="w-full max-w-xs mx-auto h-10 text-base"
        type={increaseLimitBtnType}
        onClick={increaseLimitBtnFunction}
      >
        {increaseLimitBtnChildren}
      </Button>
    </div>

  );
};
