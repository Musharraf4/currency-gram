import { isBeforeData } from "../lib/dayjs-time-format-lib";

export const check24HourForVeriff = (thenDate: any) => {
  const then = new Date(thenDate);
  const ms = Math.abs(then?.getTime() - new Date().getTime());
  const hr = ms / (60 * 60 * 1000);
  return Math.round(hr);
};

export const check6HourPast = (thenDate: any) => {
  const then = new Date(thenDate);
  const ms = Math.abs(then?.getTime() - new Date().getTime());
  const hr = ms / (60 * 60 * 1000);
  return Math.round(hr);
};

export const CalculateAgeFromDoB = (dateOfBirth: any) => {
  const ageDifMs = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age;
};

export const disableFutureDates = (currentDate: any) => isBeforeData(currentDate);
export const disablePastDates = (currentDate: any) => !isBeforeData(currentDate);
