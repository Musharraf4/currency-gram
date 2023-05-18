import { AppTitle } from "../../components/data-display/app-title/app-title";

export const TransectionInfoData = (props: any) => {
  const {
    icon,
    title,
    transectionInfoDataTitleClass,
    descriptionTitle,
    descriptionClassName,
    transectionInfoDataClass,
    transectionInfoDataIconClass,
    transectionInfoDataTextClass,
  } = props;

  return (
    <div className={transectionInfoDataClass}>
      <div className={transectionInfoDataIconClass}>{icon}</div>
      <div className={transectionInfoDataTextClass}>
        <AppTitle title={title} className={transectionInfoDataTitleClass} />
        <AppTitle title={descriptionTitle} className={descriptionClassName} />
      </div>
    </div>
  );
};
