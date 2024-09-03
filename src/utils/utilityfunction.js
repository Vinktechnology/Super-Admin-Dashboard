import dayjs from "dayjs";

export const fncBindDDLdata = (data) => {
  if (data) {
    return data.map((da) => {
      return {
        value: da?._id != undefined ? da?._id : da?.id,
        label: da.name,
      };
    });
  }
  return [];
};

export const fncBindMultiSelectdata = (data) => {
  if (data) {
    return data.map((da) => {
      return {
        value: da?._id != undefined ? da?._id : da?.id,
        label: da?.name,
      };
    });
  }
  return [];
};
export const renderArrayColumns = (data = []) => {
  const da = data.map((d) => d.name);
  return da.join(" , ");
};

export const fncBindMultiSelectdataForEdit = (data) => {
  if (data) {
    const da = data.map((da) => da?._id);
    console.log("data multi", da);
    return da;
  }
  return [];
};

const getFormatedNumber = (data) => {
  debugger;
  if (data.toString().length == 1) {
    return "0" + data;
  }
  return data;
};

export const fncGetDate = (data) => {
  if (data) {
    const da =
      data.$y +
      "-" +
      getFormatedNumber(data.$M + 1) +
      "-" +
      getFormatedNumber(data.$D) +
      "T" +
      getFormatedNumber(data.$H) +
      ":" +
      getFormatedNumber(data.$m) +
      ":00Z";
    return da;
  }
  return "";
};

export const fncGetTime = (data) => {
  if (data) {
    const da = getFormatedNumber(data.$H) + ":" + getFormatedNumber(data.$m);
    return da;
  }
  return "";
};

export const fncMakeDateTimeAsPerDayJs = (data) => {
  // Original datetime with 5:30 added
  const originalDateTime = dayjs(data);

  // Subtract 5 hours and 30 minutes
  const adjustedDateTime = originalDateTime
    .subtract(5, "hour")
    .subtract(30, "minute");

  return adjustedDateTime;
};
