
export const DeleteData = (data: any, id: any) => {
  const newData = data.filter((item: any) => item.id !== id);
  return newData;
};

export const editData = (originalData: any, dataToBeEditId: any, editedData: any) => {

  const editedObject = originalData.findIndex((singleData: any) => singleData?.id === dataToBeEditId);

  for (let key in editedData) {
    originalData[editedObject][key] = editedData[key];
  }

  return originalData;
};

export const sortArray = (items: any = [], propertyName: any, isDesc: any) => {

  let cloneArray: undefined | any = [...items];

  const newItems = cloneArray.sort((nextElement: any, previousElement: any) => {
    const nextValue =
      (typeof (nextElement[propertyName]) === 'string') ?
        nextElement[propertyName]?.replace(/\s+/g, "")?.toLowerCase() :
        nextElement[propertyName]
    const previousValue =
      (typeof (previousElement[propertyName]) === 'string') ?
        previousElement[propertyName]?.replace(/\s+/g, "")?.toLowerCase() :
        previousElement[propertyName]
    if (typeof (isDesc) !== 'boolean') return 0;
    if (nextValue < previousValue) return isDesc ? 1 : -1;
    if (nextValue > previousValue) return isDesc ? -1 : 1;
    return 0;
  });
  return newItems;
}


export const groupBy = (arrayToGroup: any, propertyName: any) => {
  return arrayToGroup?.reduce((previous: any, next: any) => {
    (previous[next[propertyName]] = previous[next[propertyName]] || []).push(next);
    // console.log({previous, next})
    return previous;
  }, {});
};

export const groupByspecificField = (arrayToGroup: any, propertyName: any, specificField: any) => {
  return arrayToGroup?.reduce((previous: any, next: any) => {
    (previous[next[propertyName]] = previous[next[propertyName]] || []).push(next?.[specificField]);
    // console.log({previous, next, })
    // console.log(next[propertyName])
    return previous;
  }, {});
};
