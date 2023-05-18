import { useAppSelector } from "../../../store/store";
import { AddBusinessCard } from "./add-business-card";
import { AddPersonalCard } from "./add-personal-card"
import { ADDCARDIMPORTS } from "./add-card-imports"
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white"

export const AddCard = () => {
  const { auth } = useAppSelector((state) => state);
  return (
    <AppCardWhite cardClassName="p-3 sm:px-14 py-16">
      {!auth.role.includes(ADDCARDIMPORTS.USERROLES.ROLEPRIORITY2) && <AddPersonalCard />}
      {auth.role.includes(ADDCARDIMPORTS.USERROLES.ROLEPRIORITY2) && <AddBusinessCard />}
    </AppCardWhite>
  )
}