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
export const renderArrayColumns=(data=[])=>
  { 
    const da = data.map((d)=>d.name);
    return da.join(" , ")
  }

  export const fncBindMultiSelectdataForEdit = (data) => {
    if (data) {
      const da=  data.map((da) => da?._id);
      console.log("data multi",da)
      return da;
    }
    return [];
  };
