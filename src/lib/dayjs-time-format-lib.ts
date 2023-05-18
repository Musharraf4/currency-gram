import dayjs from "dayjs";

export const dayjsFormatDate = (dateToFormat: any, formatType: any) =>
  dayjs(dateToFormat).format(formatType);

export const isBeforeData = (dateFrom: any) => {
  return dayjs().isBefore(dayjs(dateFrom));
};
