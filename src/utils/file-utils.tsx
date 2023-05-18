export const processCSV = (
  str: any,
  dispatch?: any,
  fileName?: any,
  delim = ",",
  setCsvArray?: any
) => {
  console.log(str.replace(/"""/g, " "));
  const cleanStr = str.replace(/"|\r/g, "");
  console.log({ cleanStr });
  const headers = cleanStr.slice(0, cleanStr.indexOf("\n")).split(delim);
  console.log({ headers });
  const rows = cleanStr.slice(cleanStr.indexOf("\n") + 1).split("\n");
  console.log({ rows });
  const filterEmptyRows = rows?.filter((x: any) => !!x);
  const newArray = filterEmptyRows?.map((row: any) => {
    const values = row.split(delim);
    const eachObject = headers.reduce((obj: any, header: any, i: any) => {
      obj[header] = values[i];
      return obj;
    }, {});
    return eachObject;
  });
  return newArray;
  // setCsvArray(newArray);
};
