const getEmirateName = (emirate_id, emirates) => {
  let emirate_name = "";
  emirates?.forEach((emirate) => {
    if (parseInt(emirate.id) === parseInt(emirate_id)) {
      console.log("heree", emirate?.name);
      emirate_name = emirate?.name;
      return;
    }
  });
  return emirate_name;
};
export default getEmirateName;
