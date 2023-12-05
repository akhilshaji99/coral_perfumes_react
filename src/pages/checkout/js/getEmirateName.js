const getEmirateName = (emirate_id, emirates) => {
  emirates?.forEach((emirate) => {
    if (parseInt(emirate.id) === parseInt(emirate_id)) {
      return emirate?.name;
    }
  });
};
export default getEmirateName;
