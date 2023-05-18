import { setBannerHeading, setPageName } from "../store/layout/layout-slice";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useAppLayout = () => {
  const { layout } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const bannerHeading: any = (heading: any) => {
    dispatch(
      setBannerHeading<any>({
        heading,
      })
    );
  };

  const pageName: any = (pageName: any) => {
    dispatch(
      setPageName<any>({
        pageName,
      })
    );
  };

  return { bannerHeading, layout, pageName };
};
