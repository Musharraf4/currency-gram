import { useAppSelector } from "../../store/store";
import { Outlet } from "react-router-dom";
import { FooterSaleSite } from "../footer/footer-sale-site";
import { HeaderSaleSite } from "../header/header-sale-site";

// Component start here
export const SalesSiteLayout = () => {
  const { layout } = useAppSelector((state) => state);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFD]">
      <div className="header sticky top-0 z-50  bg-white border-b-2">
        <HeaderSaleSite />
      </div>
      <div className="main-body grow">
        <Outlet />
      </div>
      <div className="footer mt-6 md:mt-16">
        <FooterSaleSite />
      </div>
    </div>
  );
};
