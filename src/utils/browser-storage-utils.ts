export const getDataFromLocalStorage = (storageKey: any) => {
  const data = JSON.parse(localStorage.getItem(storageKey) as string) || null;
  return data;
};

export const saveDataToLocalStorage = (storageKey: any, dataToSave: any) => {
  const data = localStorage.setItem(storageKey, JSON.stringify(dataToSave));
  return data;
};

export const removeDataFromLocalStorage = (storageKey: any) => {
  const data = localStorage.removeItem(storageKey);
  return data;
};

export const getDataFromSessionStorage = (storageKey: any) => {
  const data = JSON.parse(sessionStorage.getItem(storageKey) as string) || null;
  return data;
};

export const saveDataToSessionStorage = (storageKey: any, dataToSave: any) => {
  const data = sessionStorage.setItem(storageKey, JSON.stringify(dataToSave));
  return data;
};

export const removeDataFromSessionStorage = (storageKey: any) => {
  const data = sessionStorage.removeItem(storageKey);
  return data;
};
